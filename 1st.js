document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to Glamour Girl website!");
});

function searchContent() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const results = document.getElementById('searchResults');
    results.innerHTML = ''; // Clear previous results

    // Example content to search through
    const content = [
        { title: "Post Title 1", description: "Summary of the first post." },
        { title: "Post Title 2", description: "Summary of the second post." },
        { title: "Post Title 3", description: "Summary of the third post." }
    ];

    const filteredContent = content.filter(item => 
        item.title.toLowerCase().includes(input) || 
        item.description.toLowerCase().includes(input)
    );

    if (filteredContent.length > 0) {
        filteredContent.forEach(item => {
            const div = document.createElement('div');
            div.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
            results.appendChild(div);
        });
    } else {
        results.innerHTML = '<p>No results found.</p>';
    }
}
function addComment(event) {
    event.preventDefault();
    const commentInput = document.getElementById('comment');
    const commentList = document.getElementById('commentList');

    const newComment = document.createElement('div');
    newComment.innerHTML = `<p>${commentInput.value}</p>`;
    commentList.appendChild(newComment);

    commentInput.value = ''; // Clear the input field
}

const toggleDarkMode = document.getElementById('toggleDarkMode');
toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});