const nameInput = document.getElementById('name-input');
const nameChangeButton = document.getElementById('name-change-button');
const userName = document.getElementById('user-name');

nameChangeButton.addEventListener('click', () => {
    userName.textContent = nameInput.value;
   
});
