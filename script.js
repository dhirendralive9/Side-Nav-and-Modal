const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

// toggle nav 

toggle.addEventListener('click',()=>{
    document.body.classList.toggle('show-nav');
})

// show moddle 

open.addEventListener('click',()=>{
   modal.classList.add('show-modal');
})

//cl0se modal 


close.addEventListener('click',()=>{
    modal.classList.remove('show-modal');
});

//close modal 0n outside click 

window.addEventListener('click',e => {
  e.target == modal ? modal.classList.remove('show-modal') : false 
});
