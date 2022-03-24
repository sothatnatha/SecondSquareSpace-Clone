// sticky header
let header_stickty = document.getElementById('main-header');
document.addEventListener('scroll' , function(e) {
    if(window.scrollY > 80) {
        header_stickty.classList.add('main-header-active');
    }
    else {
        header_stickty.classList.remove('main-header-active');
    }
    // console.log(window.scrollY);
})


let isMenuToggleClicked = false;
document.querySelector('#mobile-menu-icon').addEventListener('click', (e) => {
    const mobileMenu = document.querySelector('.mobile-nav');

    if(isMenuToggleClicked) {
        mobileMenu.classList.remove('mobile-nav-active');
      
    } else {
        mobileMenu.classList.add('mobile-nav-active');
    
    }
    isMenuToggleClicked = !isMenuToggleClicked;
})

let hamburgerMenu = document.getElementById('mobile-menu-icon');
hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
})

// collapse dropdown menu
function openSubItemsClick(className) {
    let classes = document.querySelector(`#${className}`).classList;
    let isActive = false;
    for(let i = 0; i < className.length ; i++) {
        if(classes[i] === 'navbar-subitems-active')
        isActive = true;
    }
    if(isActive) {
        classes.remove('navbar-subitems-active');
    }
    else {
        classes.add('navbar-subitems-active');
    }
}
// reszie witdth
window.addEventListener('resize', function(e) {
    // console.log(e.target.innerWidth);

    if(e.target.innerWidth > 990) {
        const dom = document.querySelector('.mobile-nav');
        dom.classList.remove('mobile-nav-active');
    }
});


let toggleDropdown = false;
function toggleDropdownMenu() {
    let dropdown_container = document.querySelector('.dropdown-container');
    let arrowDownKey = document.querySelector('.fa-angle-down');
    console.log(arrowDownKey);
 
    if(!toggleDropdown) {
        dropdown_container.classList.add('dropdown-container-active');
        arrowDownKey.classList.add('fa-angle-down-active')
    }
    else  {
        dropdown_container.classList.remove('dropdown-container-active');
        arrowDownKey.classList.remove('fa-angle-down-active')
    }
    toggleDropdown = !toggleDropdown; //to check if false it will true, if true it false.
}