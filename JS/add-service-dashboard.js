let createServeBtn = document.querySelector('.btn-create');
let mainServeDiv = document.querySelector('.main-container')
let congratsDiv = document.querySelector('.congrats-container')

createServeBtn.addEventListener("click", showCongratsPage);

function showCongratsPage(){
           this.style.display = 'none';
           mainServeDiv.style.display = 'none';
           congratsDiv.style.display = 'block';
}