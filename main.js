/// 1 exercise
const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const countElement = document.getElementById('count');

let count = 0;

function updateCounter() {
    countElement.textContent = count;
}

incrementButton.addEventListener('click', function () {
    count++;
    updateCounter();
});

decrementButton.addEventListener('click', function () {
    if (count > 0) {
        count--;
        updateCounter();
    }
});

updateCounter();

/// 1 exercise style

let counter = document.querySelector('.counter');

counter.style.cssText = `
text-align: center;
font-size: 24px;
`;

let buttons = document.querySelectorAll('button');

buttons.forEach(function(button) {
    button.style.cssText = `
    font-size: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    margin: 0 10px;
    `;
});


/////////////////////////////////////////////////

/// Dop

let offset = 0;
const sliderLine = document.querySelector('.slaiderline');

document.querySelector('.slider-next').addEventListener('click', function() {
    offset = offset + 225; 
    if (offset > 400) { 
        offset = 0;
    }
    sliderLine.style.transform = `translateX(-${offset}px)`; 
});

document.querySelector('.slider-prev').addEventListener('click', function() {
    offset = offset - 225; 
    if (offset < 0) {
        offset = 450; 
    }
    sliderLine.style.transform = `translateX(-${offset}px)`; 
});

////  Dop style

let conteiner = document.querySelector('.conteiner');

conteiner.style.cssText = `
width: 1000px;
margin: 30px auto;
background: #f1f1f1;
padding: 30px;
`;

let slaider = document.querySelector('.slaider');

slaider.style.cssText = `
width: 225px;
height: 225px;
border: 2px solid black;
margin: 30px auto;
overflow: hidden;
`;

let slaiderline = document.querySelector('.slaiderline');

slaiderline.style.cssText = `
width: 450px; 
height: 225px;
background: orangered;
display: flex;
position: relative;
left: 0;
transition: transform 1s; 
`;