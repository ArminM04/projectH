const up = document.querySelector('#up')

document.addEventListener('scroll', () =>{
    var scroll_position = window.scrollY;
    
    if(scroll_position < 190){
      up.style.visibility='hidden' 
        console.log(scroll_position)
    } else {
      up.style.visibility='visible'
    }
});

menu_item.forEach( item => {
  item.addEventListener( 'click',() => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');    
  });
});

