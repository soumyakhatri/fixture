let menu = document.querySelector('.menu');
let burger =  document.querySelector('.burger');

burger.onclick = somu;
// burger.onmouseover = show;
// burger.onmouseout = hide;

function somu(){
    menu.classList.toggle('animate');
}

// function show(){
//     menu.classList.add('animate');
// }

// function hide(){
//     menu.classList.remove('animate');
// }
