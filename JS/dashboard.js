// NavBar Burger Icon Dropdown

let menu = document.querySelector('.menu');
let burger = document.querySelector('.burger');

burger.onclick = somu;

function somu() {
    menu.classList.toggle('animate');
}

// automatic change of color of dropdown buttons in Appointment Section

let btnLength = document.querySelectorAll('.apt-btn').length;
let btn = document.querySelectorAll('.apt-btn');
let btnI = document.querySelectorAll('.apt-btn i');

for (i = 0; i < btnLength; i++) {
    if (btn[i].innerText === "Pending") {
        btn[i].style.backgroundColor = "#E6E4F5";
        btn[i].style.color = "#1E00FF";
        btnI[i].style.color = "#1E00FF";
    } else if (btn[i].innerText === "Confirmed") {
        btn[i].style.backgroundColor = "#87FFA5";
        btn[i].style.color = "#004912";
        btnI[i].style.color = "#004912";
    } else if (btn[i].innerText === "Rescheduled") {
        btn[i].style.backgroundColor = "#FFF0C6";
        btn[i].style.color = "#463D00";
        btnI[i].style.color = "#463D00";
    } else if (btn[i].innerText === "Cancelled") {
        btn[i].style.backgroundColor = "#FFD1A6";
        btn[i].style.color = "#FF0000";
        btnI[i].style.color = "#FF0000";
    }
}

// toggle Note Icon on hover in table

let noteTd = document.querySelectorAll('.note-td');
let noteImg = document.querySelectorAll('.note-td img')

for (i = 0; i < noteTd.length; i++) {
    noteImg[i].classList.add("note-img-" + i);
    noteTd[i].classList.add("note-td-" + i);
    noteTd[i].addEventListener('mouseover', showNoteIcon);
}

for (i = 0; i < noteTd.length; i++) {
    noteTd[i].addEventListener('mouseout', hideNoteIcon);
}

function hideNoteIcon() {
    for (i = 0; i < noteTd.length; i++) {
        if (this.classList[1] === 'note-td-' + i) {
            document.querySelector('.note-img-' + i).style.display = 'none';
        }
    }
}

function showNoteIcon() {
    for (i = 0; i < noteTd.length; i++) {
        if (this.classList[1] === 'note-td-' + i) {
            document.querySelector('.note-img-' + i).style.display = 'inline-block';
        }
    }
}

//  toggle text area on click on note icon


for (i = 0; i < noteTd.length; i++) {
    document.querySelectorAll('.textarea-div')[i].style.display = 'none'
    document.querySelectorAll('.textarea-div')[i].classList.add('textArea' + i);
    document.querySelectorAll('.textarea-div')[i].classList.add('textArea' + i);

    document.querySelectorAll('.txt-sbmt')[i].classList.add('textAreaButton' + i);
    document.querySelectorAll('.txt-sbmt')[i].onclick = closeTextArea;

    document.querySelector('.note-img-' + i).onclick = toggleTextArea;
}

function toggleTextArea() {
    for (i = 0; i < noteTd.length; i++) {
        if (this.classList[1] === 'note-img-' + i) {
            if (document.querySelector('.textArea' + i).style.display === 'none') {
                document.querySelector('.textArea' + i).style.display = 'block';
            } else if (document.querySelector('.textArea' + i).style.display === 'block') {
                document.querySelector('.textArea' + i).style.display = 'none';
            }
        }
    }
}

function closeTextArea() {
    for (i = 0; i < noteTd.length; i++) {
        if (this.classList[1] === 'textAreaButton' + i) {
            document.querySelector('.textAreaButton' + i).innerText = 'Saved';
            document.querySelector('.note-img-' + i).style.display = 'inline-block';

            let num = i;
            
            setTimeout(textAreaHide, 300, num);
            
            function textAreaHide(num){
                document.querySelector('.textArea' + num).style.display = 'none';
                document.querySelector('.textAreaButton' + num).innerText = 'Save';
            }

            
        }
    } 
}

// toggle Create button dropdown

let createBtnDropdown = document.querySelector('.create-div');
let createBtn = document.querySelector('.btn-create');

createBtn.onclick = toggleCreateDropdown;

function toggleCreateDropdown(){


            createBtnDropdown.classList.toggle('animate-create');
            createBtn.classList.toggle('btn-create-style')
}