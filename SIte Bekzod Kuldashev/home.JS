document.addEventListener('DOMContentLoaded', function() {
    const textContainer = document.getElementById('text-container');
    let showingText1 = true;

    setInterval(() => {
        if (showingText1) {
            textContainer.classList.add('hidden');
            setTimeout(() => {
                textContainer.innerText = 'Frontend Developer';
                textContainer.classList.remove('hidden');
                showingText1 = false;
            }, 500);
        } else {
            textContainer.classList.add('hidden');
            setTimeout(() => {
                textContainer.innerText = 'Graphic Designer';
                textContainer.classList.remove('hidden');
                showingText1 = true;
            }, 500);
        }
    }, 5000); // Меняет текст каждые 3 секунды
});










// Функция для сохранения комментария
function submitComment() {
    const username = document.getElementById('usernameInput').value;
    const comment = document.getElementById('commentInput').value;

    if (username && comment) {
        const commentObj = { username, comment };
        saveComment(commentObj);
        displayComments();
        clearInputs();
    } else {
        alert('Пожалуйста, введите имя и комментарий');
    }
}

// Функция для сохранения комментария в локальное хранилище браузера
function saveComment(comment) {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
}

// Функция для отображения сохраненных комментариев
function displayComments() {
    const commentsList = document.getElementById('commentsList');
    commentsList.innerHTML = '';

    const comments = JSON.parse(localStorage.getItem('comments')) || [];

    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `<strong>${comment.username}:</strong> ${comment.comment}`;
        commentsList.appendChild(commentElement);
    });
}

// Очистить поля ввода после отправки комментария
function clearInputs() {
    document.getElementById('usernameInput').value = '';
    document.getElementById('commentInput').value = '';
}

// Отображаем сохраненные комментарии при загрузке страницы
document.addEventListener('DOMContentLoaded', displayComments);




























document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('background-video');
    
    // Пример функции для управления видео
    const playPauseButton = document.createElement('none');
    playPauseButton.textContent = '';
    document.body.appendChild(playPauseButton);

    playPauseButton.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playPauseButton.textContent = '';
        } else {
            video.pause();
            playPauseButton.textContent = '';
        }
    });
});
































window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.display = 'none'; // Скрыть загрузочный экран
    const content = document.querySelector('.content');
    content.style.display = 'block'; // Показать содержимое страницы
    document.body.style.overflow = 'auto'; // Разрешить прокрутку после загрузки
});









document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');

    menuIcon.addEventListener('click', () => {
        if (navMenu.style.display === 'block') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'block';
        }
    });
});








































