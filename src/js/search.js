function performSearch(event) {
    event.preventDefault();
    const query = document.getElementById("search-input").value;
    const searchURL = "https://www.duckduckgo.com?t=h_&q=" + encodeURIComponent(query);
    window.location.href = searchURL;
}