function displayDateTime() {
    const time = new Date();

    const year = time.getFullYear();
    const month = time.toLocaleString('default', {month: "long"});
    const day = time.getDate();

    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');

    const formattedDate = `${day} ${month} ${year}`;
    const formattedTime = `${hours}:${minutes}`;

    document.getElementById("date").innerHTML = `${formattedDate}`;
    document.getElementById("time").innerHTML = `${formattedTime}`;
}

displayDateTime();

setInterval(displayDateTime, 1000);