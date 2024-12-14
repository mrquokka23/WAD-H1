const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./database'); // Your database connection file
const cors = require('cors');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');


const port = process.env.PORT || 3000;
const app = express();

app.use(cors({ origin: 'http://localhost:8080', credentials: true })); // Enable CORS for your frontend
app.use(express.json()); // Parses incoming JSON requests
app.use(cookieParser()); // Parses cookies from the request

const secret = "gdgdhdbcb770785rgdzqws"; // Use a stronger secret in production
const maxAge = 60 * 60; // Token expiration time in seconds

const generateJWT = (id) => {
    return jwt.sign({ id }, secret, { expiresIn: maxAge });
};

// Middleware to authenticate JWT
const authenticateJWT = (req, res, next) => {
    const token = req.cookies.jwt; // Retrieve token from cookies
    if (token) {
        jwt.verify(token, secret, (err, user) => {
            if (err) {
                return res.sendStatus(403); // Forbidden if token is invalid
            }
            req.user = user; // Attach user info to the request
            next(); // Proceed to the next middleware or route handler
        });
    } else {
        res.sendStatus(401); // Unauthorized if no token is provided
    }
};

app.listen(port, () => {
    console.log("Server is listening to port " + port)
});

// Get all posts
app.get('/api/posts', authenticateJWT, async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM posts ORDER BY created_at DESC');
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong.' });
    }
});

// Get post by ID
app.get('/api/posts/:id', authenticateJWT, async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong.' });
    }
});

// Create a new post
app.post('/api/posts', authenticateJWT, async (req, res) => {
    const { username, content, image_url } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO posts (username, content, image_url) VALUES ($1, $2, $3) RETURNING *',
            [username, content, image_url]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong.' });
    }
});

// Update a post
app.put('/api/posts/:id', authenticateJWT, async (req, res) => {
    const { id } = req.params;
    const { content, image_url } = req.body;
    try {
        const result = await pool.query(
            'UPDATE posts SET content = $1, image_url = $2 WHERE id = $3 RETURNING *',
            [content, image_url, id]
        );
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong.' });
    }
});

// Delete a post
app.delete('/api/posts/:id', authenticateJWT, async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length > 0) {
            res.status(200).json({ message: 'Post deleted successfully', post: result.rows[0] });
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong.' });
    }
});

// User registration
app.post('/auth/register', async (req, res) => {
    try {
        console.log("A signup request has arrived");
        const { email, password } = req.body;

        // Check if the user already exists
        const userExists = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (userExists.rows.length > 0) {
            return res.status(409).json({ error: "User already registered. Please log in." });
        }

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const authUser = await pool.query(
            "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *", 
            [email, hashedPassword]
        );

        const token = await generateJWT(authUser.rows[0].id);
        res.status(201)
            .cookie('jwt', token, { maxAge: 6000000, httpOnly: true })
            .json({ user_id: authUser.rows[0].id });
    } catch (err) {
        console.error(err.message);
        res.status(400).send(err.message);
    }
});

// User login
app.post('/auth/login', async (req, res) => {
    try {
        console.log("A login request has arrived");
        const { email, password } = req.body;
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        
        if (user.rows.length === 0) {
            return res.status(401).json({ error: "User is not registered" });
        }
        
        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        if (!validPassword) {
            return res.status(401).json({ error: "Incorrect password" });
        }

        const token = await generateJWT(user.rows[0].id);
        res.status(200)
            .cookie('jwt', token, { maxAge: 6000000, httpOnly: true })
            .json({ user_id: user.rows[0].id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

app.get('/auth/logout', (req, res) => {
    console.log('Delete JWT request arrived');
    res
        .status(200) // Returning success on logout
        .clearCookie('jwt')
        .json({ msg: "Cookie cleared" }); // Remove .send for proper response
});
