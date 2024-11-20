const currentLocation = window.location.pathname;

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    if (link.getAttribute('href') === getStringAfterLastSlash(currentLocation)) {
        link.classList.add('active');
    }
});

function getStringAfterLastSlash(str) {
    const lastSlashIndex = str.lastIndexOf('/');
    return str.substring(lastSlashIndex + 1);
}