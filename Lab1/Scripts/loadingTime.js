(function() {

    const startTime = performance.now();

    window.addEventListener('load', function() {

        const endTime = performance.now();
        const loadTime = (endTime - startTime).toFixed(2);

        const footer = document.querySelector('footer');
        const time = `Страница загружена за ${loadTime} мс`;

        const timeElement = document.createElement('p');
        timeElement.textContent = time;

        footer.appendChild(timeElement);
    });
})();