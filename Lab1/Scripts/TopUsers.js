document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById('preloader');
    const dataContainer = document.getElementById('topUserList');
    const errorMessage = document.getElementById('error-message');

    function fetchData() {
        let url = 'https://jsonplaceholder.typicode.com/users';

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Сеть недоступна');
                }
                return response.json();
            })
            .then(data => {
                preloader.classList.add('hidden');
                renderData(data);
            })
            .catch(error => {
                preloader.classList.add('hidden');
                errorMessage.classList.remove('hidden');
                console.error(error);
            });
    }

    function renderData(data) {
        dataContainer.innerHTML = '';

        const seconds = new Date().getSeconds();
        data.forEach(item => {
            const li = document.createElement('li');
            if (seconds % 2 === item.id % 2) {
                li.innerText = `ID: ${item.id}, name: ${item.name}, email: ${item.email}`;
                dataContainer.appendChild(li);
            }
        });
    }

    fetchData();
});