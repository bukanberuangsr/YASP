function performSearch(event) {
    event.preventDefault();
    const query = document.getElementById("search-input").value;
    const searchEngine = "https://www.duckduckgo.com?t=h_&q="
    const searchURL = searchEngine + encodeURIComponent(query);
    window.location.href = searchURL;
}