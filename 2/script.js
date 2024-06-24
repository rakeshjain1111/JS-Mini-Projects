
const body =document.querySelector('body');
const btn =document.querySelector('button');

// const colors =['red','blue','green','yellow','orange',"brown"];
var colors = ["green","blue","red","orange","yellow","violet"];
  
body.style.background = "pink";
let count = 0;

btn.addEventListener('click' ,()=>{
      // body.style.background = colors[count%colors.length];
      let i = parseInt(Math.random()*colors.length);
      console.log(i);
      body.style.background = colors[i];
      count++;
});