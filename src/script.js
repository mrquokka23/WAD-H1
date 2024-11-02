const API_ENDPOINT = 'https://api.jsonbin.io/v3/b/672603d9acd3cb34a8a13c3d';

document.addEventListener('DOMContentLoaded', function () {
    const accountLink = document.getElementById('account-link');
    const dropdown = document.getElementById('dropdown');

    // Toggle the dropdown menu on click
    accountLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent anchor default behavior
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function (event) {
        if (!accountLink.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });
    loadJSON();
});
    

    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'X-Access-Key' : '$2a$10$fDUywYuTxjBWIvJFfIp3Ju1ProrL2WD2eBwqnxitpklK0kuq9uWZy'
    //     }
    // };

//     fetch(API_ENDPOINT, options)
//     .then((response) => response.json())
//     .then(json => {
//         if(window.location.pathname === '/index.html') {
//             const postscontainer = document.getElementsByClassName('posts');
//             console.log(postscontainer);
//             for(const postdata of json.record.posts){
//                 let post = document.createElement("div");
//                 post.className = 'post';

//                 let headerdiv = document.createElement("div");
//                 post.appendChild(headerdiv);
//                 headerdiv.className = 'postHeader';

//                 let userimage  = document.createElement("img");
//                 headerdiv.appendChild(userimage);
//                 userimage.className = 'userImage';
//                 userimage.src = 'res/images/me.png';
                
//                 let date = document.createElement("h2");
//                 headerdiv.appendChild(date)
//                 date.className = 'date';
//                 date.textContent = formatDate(new Date(postdata.created_at));

//                 if(postdata.imageUrl != null) {
//                     let postimage = document.createElement("img");
//                     post.appendChild(postimage);
//                     postimage.className = 'postImage';
//                     postimage.src = postdata.imageUrl
//                 }
                
//                 let postcontent  = document.createElement("p");
//                 post.appendChild(postcontent);
//                 postcontent.className = 'postText';
//                 postcontent.textContent = postdata.content

//                 let like = document.createElement("img");
//                 post.appendChild(like);
//                 like.className = 'like';
//                 like.src = 'res/images/like.png';
                
                
//                 postscontainer[0].appendChild(post);

//                 console.log(postdata.imageUrl)
//             }
//         }
//     })
// });

const LOCAL_JSON_PATH = "WAD-H1/res/json/myjson.json";

//Potentially fixes the problem where github pages does not load
async function loadJSON(){
    try{
        const response = await fetch(LOCAL_JSON_PATH);
        const json = await response.json();

        if(window.location.pathname === '/index.html') {
            const postscontainer = document.getElementsByClassName('posts');
            console.log(postscontainer);
            for(const postdata of json.posts){
                let post = document.createElement("div");
                post.className = 'post';

                let headerdiv = document.createElement("div");
                post.appendChild(headerdiv);
                headerdiv.className = 'postHeader';

                let userimage  = document.createElement("img");
                headerdiv.appendChild(userimage);
                userimage.className = 'userImage';
                userimage.src = 'res/images/me.png';
                
                let date = document.createElement("h2");
                headerdiv.appendChild(date)
                date.className = 'date';
                date.textContent = formatDate(new Date(postdata.created_at));

                if(postdata.imageUrl != null) {
                    let postimage = document.createElement("img");
                    post.appendChild(postimage);
                    postimage.className = 'postImage';
                    postimage.src = postdata.imageUrl
                }
                
                let postcontent  = document.createElement("p");
                post.appendChild(postcontent);
                postcontent.className = 'postText';
                postcontent.textContent = postdata.content

                let like = document.createElement("img");
                post.appendChild(like);
                like.className = 'like';
                like.src = 'res/images/like.png';
                
                
                postscontainer[0].appendChild(post);

                console.log(postdata.imageUrl)
            }
    }

        }catch(error){
            console.error("Error fetching local JSON:", error)
        }
    }



function formatDate(unformatted) {
    return Intl.DateTimeFormat('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }).format(unformatted);
}
