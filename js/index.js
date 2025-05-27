function viewNavigation() {

    const nav = document.getElementsByClassName('nav')[0];
    const widthBreakpoint = window.screen.width;
    
    if (widthBreakpoint <= 767) {

        if (!nav.classList.contains('navDesktop--ocultMobile')) {

            nav.classList.add('navDesktop--ocultMobile');

        };

    } else if (widthBreakpoint > 1024) {

        if (nav.classList.contains('navDesktop--ocultMobile')) {

            nav.classList.remove('navDesktop--ocultMobile');

        };

    };

};

function viewIconArrow () {

    const containerIconArrow = document.getElementsByClassName('asideInitial__containerArrow')[0];
    const widthBreakpoint = window.screen.width;

    if (widthBreakpoint <= 767) {

        if (!containerIconArrow.classList.contains('iconArrow--ocultMobile')) {

            containerIconArrow.classList.add('iconArrow--ocultMobile');

        };

    } else if (widthBreakpoint > 1024) {

        if (containerIconArrow.classList.contains('iconArrow--ocultMobile')) {

            containerIconArrow.classList.remove('iconArrow--ocultMobile');
            console.log()
        };

    };

};

function viewMenuMobile () {

    const containerIconMenu = document.getElementsByClassName('header__containerIcon')[0];
    const widthBreakpoint = window.screen.width;

     if (widthBreakpoint <= 767) {

        if (containerIconMenu.classList.contains('menuMobile--disableDesktop')) {

            containerIconMenu.classList.remove('menuMobile--disableDesktop');

        };

    } else if (widthBreakpoint > 1024) {

        if (!containerIconMenu.classList.contains('menuMobile--disableDesktop')) {

            containerIconMenu.classList.add('menuMobile--disableDesktop');

        };

    };

};

document.addEventListener('DOMContentLoaded', function() {

    viewNavigation();

    viewIconArrow();

    viewMenuMobile();

});

window.addEventListener('resize', function() {

    viewNavigation();

    viewIconArrow();

    viewMenuMobile();

});


