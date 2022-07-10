let bar = document.querySelector('#bar');
let navbar = document.querySelector('.navbar');
let closebtn = document.querySelector('#closebtn');

if(closebtn){
    closebtn.addEventListener('click', function(){
        if (navbar.classList.contains('show-links')) {
            navbar.classList.remove('show-links');
            bar.className="fas fa-outdent"; 
        } 
    });
}
bar.addEventListener('click', () => {
    if (navbar.classList.contains('show-links')) {
        navbar.classList.remove('show-links');
        bar.className="fas fa-outdent"; 
    }
    else {
        navbar.classList.add('show-links');
      bar.className="fa fa-close" ; }
}
);