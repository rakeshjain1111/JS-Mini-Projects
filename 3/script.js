const btn = document.querySelector('button');
const input = document.querySelector('input');
const msg = document.querySelector('.msg');
const err = document.querySelector('.err');

btn.addEventListener('click', ()=>{
     if(input.value){
        msg.textContent =input.value;
        input.value = '';
     }else{
        err.style.display = "block";
        setInterval(()=>{
            err.style.display = "none";
        },10000);
     }
});

