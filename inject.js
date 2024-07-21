document.addEventListener("DOMContentLoaded", function () {
    document.head.innerHTML += `<link rel="stylesheet" href="style.css" />`
    document.body.innerHTML += `<nav>
            <div class="logo" onclick="window.location.href='./'">
                <img src="assets/logo.png" alt="Church Logo" />
                <div>
                    <h1>GLENUNGA</h1>
                    <p>Uniting Church</p>
                </div>
            </div>
            <div class="links">
                <a href="./">Home</a>
                <a href="about.html">About</a>
                <a href="activities.html">Activities</a>
                <a href="events.html">Events</a>
                <a href="facilities.html">Facilities</a>
            </div>
        </nav>`
})
