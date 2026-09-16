function performSearch(event) {
    event.preventDefault();
    const query = document.getElementById("search-input").value;
    const searchEngine = "https://duckduckgo.com/?t=ffab&q="
    const searchURL = searchEngine + encodeURIComponent(query);
    window.location.href = searchURL;
}
