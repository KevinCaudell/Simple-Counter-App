let counter = 0;

const count = document.getElementById('count');
const increase_btn = document.getElementById('increase-btn');
const decrease_btn = document.getElementById('decrease-btn');
const reset_btn = document.getElementById('reset-btn');

increase_btn.addEventListener('click', ()=>{
    counter ++;
    count.textContent = counter;
});

decrease_btn.addEventListener('click', ()=>{
    counter --;
    count.textContent = counter;
});

reset_btn.addEventListener('click', ()=>{
    counter = 0;
    count.textContent = counter;
});
