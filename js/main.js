const bars = document.querySelector('.bars');
const headerList = document.querySelector('.header__list');
let isActive = false;

function barsHandler() {
    if(isActive){
        bars.classList.remove('bars--active');
        headerList.classList.remove('header__list--active');
        isActive = false;
    }else{
        bars.classList.add('bars--active');
        headerList.classList.add('header__list--active');
        isActive = true;
    }
}

$('.about__btn').fancybox({
    'transitionIn':'elastic',
    'transitionOut':'elastic',
    'speedIn':600, 
    'speedOut':200, 
    'overlayShow':false
});