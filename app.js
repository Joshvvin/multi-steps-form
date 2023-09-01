
const second_step = document.querySelector('.content-second');
const first_step = document.querySelector('.content-first');
const third_step = document.querySelector('.content-third');
const fourth_step = document.querySelector('.content-fourth');
const fifth_step = document.querySelector('.content-fifth');
const first_index = document.querySelector('.first-index');
const second_index = document.querySelector('.second-index');
const third_index = document.querySelector('.third-index');
const fourth_index = document.querySelector('.fourth-index');
const second_back = document.querySelector('.back-second');
const first_button = document.querySelector('.next-step-first');
const second_button = document.querySelector('.next-step-second');
const third_button = document.querySelector('.next-step-third');
const fourth_button = document.querySelector('.next-step-fourth');
fifth_step.style.display = 'none';
function displaysecond(){
    // console.log(first_step);
    first_step.style.display = 'none';
    second_step.style.display = 'flex';
    first_index.style.backgroundColor = 'transparent';
    first_index.style.color = 'white';
    second_index.style.backgroundColor = 'white';
    second_index.style.color = 'black';
}
first_button.addEventListener('click', displaysecond);

function displaythird(){
    second_step.style.display = 'none';
    third_step.style.display = 'flex';
    second_index.style.backgroundColor = 'transparent';
    second_index.style.color = 'white';
    third_index.style.backgroundColor = 'white';
    third_index.style.color = 'black';
}
second_button.addEventListener('click', displaythird);
function displayfourth(){
    third_step.style.display = 'none';
    fourth_step.style.display = 'flex';
    third_index.style.backgroundColor = 'transparent';
    third_index.style.color = 'white';
    fourth_index.style.backgroundColor = 'white';
    fourth_index.style.color = 'black';
}
third_button.addEventListener('click', displayfourth);
function gobacktofirst(){
    second_step.style.display = 'none';
    first_step.style.display = 'flex';
    second_index.style.backgroundColor = 'transparent';
    second_index.style.color = 'white';
    first_index.style.backgroundColor = 'white';
    first_index.style.color = 'black';
}
second_back.addEventListener('click', gobacktofirst);
function displayfifth(){
    fifth_step.style.display = 'flex';
    fourth_step.style.display = 'none';
}
fourth_button.addEventListener('click', displayfifth);
// second_button.addEventListener('click', displaythird);
