function updateCounter(num, rst=false){
    let counter;

    if (rst){
        counter = 0;
    }else{
        counter = Number(localStorage.getItem('count'));
        counter += num;
    };

    localStorage.setItem('count', counter);
    count.textContent = counter;
};

if (localStorage.getItem('count') === null){
    localStorage.setItem('count', 0);
};

const count = document.getElementById('count');
count.textContent = localStorage.getItem('count');

const increase_btn = document.getElementById('increase-btn');
const decrease_btn = document.getElementById('decrease-btn');
const reset_btn = document.getElementById('reset-btn');
const incr10_btn = document.getElementById('incr10-btn');
const decr10_btn = document.getElementById('decr10-btn');
const incr50_btn = document.getElementById('incr50-btn');
const decr50_btn = document.getElementById('decr50-btn');
const incr100_btn = document.getElementById('incr100-btn');
const decr100_btn = document.getElementById('decr100-btn');

const customNumber = document.getElementById('number');
const customNumber_btn = document.getElementById('custom-btn');

increase_btn.addEventListener('click', ()=>{updateCounter(1)});

decrease_btn.addEventListener('click', ()=>{updateCounter(-1)});

reset_btn.addEventListener('click', ()=>{updateCounter(0, true)});

incr10_btn.addEventListener('click', ()=>{updateCounter(10)});

decr10_btn.addEventListener('click', ()=>{updateCounter(-10)});

incr50_btn.addEventListener('click', ()=>{updateCounter(50)});

decr50_btn.addEventListener('click', ()=>{updateCounter(-50)});

incr100_btn.addEventListener('click', ()=>{updateCounter(100)});

decr100_btn.addEventListener('click', ()=>{updateCounter(-100)});

customNumber_btn.addEventListener('click', ()=>{
    updateCounter(Number(customNumber.value));
    customNumber.value = '';
});
