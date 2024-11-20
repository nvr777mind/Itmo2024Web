document.addEventListener('DOMContentLoaded', () => {
    const markVisitedButton = document.getElementById('markVisited');
    const nameInput = document.getElementById('name');
    const nicknameInput = document.getElementById('nickname');
    const userList = document.getElementById('userList');

    function updateUserList() {
        userList.innerHTML = '';
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `${user.name} (${user.nickname})`;
            userList.appendChild(li);
        });
    }

    updateUserList();

    markVisitedButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const nickname = nicknameInput.value.trim();

        if (name && nickname) {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            users.push({ name, nickname });
            localStorage.setItem('users', JSON.stringify(users));
            nameInput.value = '';
            nicknameInput.value = '';
            updateUserList();
        } else {
            alert('Пожалуйста, заполните оба поля.');
        }
    });
});