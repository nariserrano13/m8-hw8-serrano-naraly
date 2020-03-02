// It is always helpful to use comments in your code!
var  navLinks = document.getElementsByClassName('nav-link');
var dropdowns = document.getElementsByClassName('sub-menu');

function toggleDropdown(){
   this.children[1].classList.toggle('show');
}

for(i=0;i<navLinks.length;i++){
    navLinks[i].addEventListener('mouseenter', toggleDropdown);
    navLinks[i].addEventListener('mouseleave', toggleDropdown);
}

/*  used in toggleDropdown() to apply event listeners to each of dropdowns
    this was not used because it was toggling dropdowns for EACH navLinks 
    when you hovered over a navlink

    for(i=0;i<dropdowns.length;i++){
        dropdowns[i].classList.toggle('show');
    }
 */