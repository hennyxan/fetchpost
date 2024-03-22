document.addEventListener("DOMContentLoaded", function () {
    // Fetch posts and display them
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => displayPosts(posts));

    // Function to display posts
    function displayPosts(posts) {
        const postsContainer = document.getElementById("postsContainer");

        posts.forEach(post => {
            const postElement = document.createElement("div");
            postElement.classList.add("post");
            postElement.textContent = post.title;
            postElement.addEventListener("click", () => showPostDetails(post.id));
            postsContainer.appendChild(postElement);
        });
    }

    // Function to show post details in a popup
    function showPostDetails(postId) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then(post => {
                document.getElementById("postTitle").textContent = post.title;
                document.getElementById("postBody").textContent = post.body;
                document.getElementById("postPopup").style.display = "block";
            });
    }

    // Function to close the popup
    window.closePopup = function () {
        document.getElementById("postPopup").style.display = "none";
    };
});
