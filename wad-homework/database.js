const { Pool } = require('pg');

const pool = new Pool({
    user: "postgres",
    password: "", // add your password
    database: "HW_AM",
    host: "localhost",
    port: "5432"
});

const execute = async (query) => {
    try {
        const result = await pool.query(query); // executes a single query
        return result; // return the result of the query
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

// Create users table
const createTblQuery1 = `
    CREATE TABLE IF NOT EXISTS "users" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(200) NOT NULL UNIQUE,
        password VARCHAR(200) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`;

// Create posts table
const createTblQuery2 = `
    CREATE TABLE IF NOT EXISTS "posts" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        userid uuid NOT NULL,                                -- Assuming you want a UUID foreign key
        content TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        image_url VARCHAR(255),
        FOREIGN KEY (userid) REFERENCES users(id)            -- Add foreign key constraint if necessary
    );`;

execute(createTblQuery2).then(result => {
    if (result) {
        console.log('Table "posts" is created');
    }
});

module.exports = pool;