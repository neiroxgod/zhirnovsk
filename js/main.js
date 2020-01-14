const navbar = document.querySelector('.lines');
const project = document.querySelector('.project');
const opennedNav = document.querySelector('.nav_open');
const closeNav = document.querySelector('.nav_close');
const navHeader = document.querySelector('.header');
const navElems = document.querySelectorAll('.nav-wrapper_main a');

project.addEventListener('mouseover', () => {
    document.querySelector('.project span').style.opacity = 1;
    project.addEventListener('mouseleave', () => {
        document.querySelector('.project span').style.opacity = .2;
    })
});


const tl = new TimelineMax();



navbar.addEventListener('click', () => {
    navbar.style.transform = 'rotate(90deg)';
    opennedNav.style.opacity = 1;
    opennedNav.style.zIndex = 2;

    tl.fromTo(opennedNav, 0.4, {
            display: 'none'
        }, {
            display: 'block',
            ease: Power2.easeOut
        })
        .fromTo(opennedNav, 1, {
            height: '0vh'
        }, {
            height: '100vh',
            ease: Power2.easeOut
        })
        .fromTo(navHeader, 0.5, {
            opacity: 0
        }, {
            opacity: 1,
            ease: Power2.easeOut
        })
        .fromTo(navElems, 0.5, {
            display: 'none'
        }, {
            display: 'block',
            ease: Power2.easeOut
        })
        .fromTo(navElems, 0.3, {
            opacity: 0
        }, {
            opacity: 1,
            ease: Power2.easeOut
        })
        .fromTo(navElems, 0.5, {
            height: '0px'
        }, {
            height: '300px',
            ease: Power2.easeOut
        })

})

closeNav.addEventListener('click', () => {
    navbar.style.transform = 'rotate(0deg)'
    tl.fromTo(navHeader, 0.5, {
            opacity: 1
        }, {
            opacity: 0,
            ease: Power2.easeOut
        })
        .fromTo(navElems, 0.3, {
            height: '300px'
        }, {
            height: '0px',
            ease: Power2.easeOut
        })
        .fromTo(navElems, 0.3, {
            opacity: 1
        }, {
            opacity: 0,
            ease: Power2.easeOut
        })
        .fromTo(opennedNav, 1, {
            height: '100vh'
        }, {
            height: '0vh',
            ease: Power2.easeOut
        })
        .fromTo(navElems, 0.5, {
            display: 'block'
        }, {
            height: 'none',
            ease: Power2.easeOut
        })
        .fromTo(opennedNav, 0.4, {
            display: 'block'
        }, {
            display: 'none',
            ease: Power2.easeOut
        })
});




//------------------------------------------------

//Slider

const sliderUp = document.querySelectorAll('.up');
const sliderDown = document.querySelectorAll('.down');
const sliderCarousel = document.querySelectorAll('.header-right_first__block');

let sliderCounter = 0;
let carouselLength = sliderCarousel.length;

sliderUp.forEach(slider => {
    slider.addEventListener('click', () => {
        sliderCarousel[sliderCounter].classList.remove('show');
        sliderCounter++;
        if (sliderCounter > carouselLength - 1) {
            sliderCounter = 0;
        }
        sliderCarousel[sliderCounter].classList.add('show');
        tl.fromTo(sliderCarousel[sliderCounter], 1, {
            y: '150%'
        }, {
            y: '0%',
            ease: Power2.easeInOut
        });
        
    });
})

sliderDown.forEach(slider => {
    slider.addEventListener('click', () => {
        sliderCarousel[sliderCounter].classList.remove('show');
        sliderCounter--;
        if (sliderCounter < 0) {
            sliderCounter = carouselLength - 1;
        }
        sliderCarousel[sliderCounter].classList.add('show');
        tl.fromTo(sliderCarousel[sliderCounter], 1, {
            y: '-150%'
        }, {
            y: '0%',
            ease: Power2.easeInOut
        })
    });
})


//---------------------------------------------------------

//distortion

const distortionImage = document.querySelector('.distortion');

new hoverEffect({
    parent: document.querySelector('.distortion'),
    intensity1: 0.3,
    intensity2: 0.5,
    speedIn: 1,
    speedOut: 2,
    image1: '../build/img/1.jpg',
    image2: '../build/img/3.jpg',
    displacementImage: './img/dot.jpg',
});