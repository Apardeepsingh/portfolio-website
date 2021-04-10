gsap.registerPlugin(ScrollTrigger)


$(window).on('scroll', function () {

    if ($(window).scrollTop() >= 170) {
        $('nav').addClass('black');
    }
    else {
        $('nav').removeClass('black');
    }
});

function load() {
    $('.loading').css("display", "none");
}

var typed = new Typed('.type', {
    strings: [
        'Full Stack Web Developer',
        'and',
        'Web Designer'
    ],
    smartBackspace: true,
    typeSpeed: 120,
    backSpeed: 40,
    backDelay: 800,
    cursorChar: '|',
    loop: true,
    // fadeOut: true,
});

const counters = document.querySelectorAll('.counter');
const speed = 21;

const myFunction = () => {
    counters.forEach(counter => {
        const updCount = () => {
            const target = counter.getAttribute('data-target');
            const count = +counter.innerText;

            const score = target / speed;

            if (count < target) {
                counter.innerText = count + score;
                setTimeout(updCount, 100);
            }
            else {
                counter.innerText = target;
            }
        };
        updCount();
    })
}


$('.countup').counterUp({
    delay: 30,
    time: 1000
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    $(".bg").css({
        width: (100 + scroll / 5) + "%"
    })
})
const timeline = gsap.timeline();

timeline
    .fromTo(
        '.entrylogo a', {
        opacity: 0,
        y: -300,
        ease: "bounce",
        duration: 1.7

    },
        {
            y: -210,
            ease: "bounce",
            opacity: 1,
            duration: 0.8
        }
    )

let exit = gsap.timeline({
    delay: 1.2,
    onComplete: myFunction
});

exit
    .to(
        '.entrylogo a', {
        y: -312,
        opacity: 0
    }
    )
    .to(
        '.entrylogo a h1', {
        fontSize: 26,
        duration: 1.8
    }, 0
    )
    .to(
        '.entrylogo a img', {
        width: 76,
        duration: 1.8
    }, 0
    )
    .to(
        '.entrylogo', {
        delay: -1.5,
        duration: 1.9999,
        ease: "power1.inOut",
        display: "none"
    }, 0
    )
    .from(
        '.info', {
        delay: -1.5,
        opacity: 0,
    }
    )
    .from(
        ['.logo', '.menu a', '#cv'], {
        opacity: 0,
        stagger: 0.2
    }, 1.5
    )
    .from(
        ['.content p', '.content h1', '.content div'], {
        delay: 0.3,
        opacity: 0,
        stagger: .1,
        duration: 0.7
    }
    )
    .from(
        '.content .follow a', {
        delay: -1,
        opacity: 0,
        stagger: .1
    }
    )
    .from(
        ['.information .hireee', '.information .experience'], {
        opacity: 0,
        y: 30,
    }, 4.4
    )
    .call(myFunction)


const achieves = gsap.timeline({
    scrollTrigger: {
        trigger: '.achieve',
        start: 'top center+=35%',
        end: 'bottom bottom'

    }
})

achieves
    .from(
        '.counts .box', {
        opacity: 0,
        stagger: 0.1,
        y: 20
    }
    )



const abt = gsap.timeline({
    scrollTrigger: {
        trigger: '.aboutMe',
        start: 'top center+=30%',
        end: 'bottom bottom'

    }
})

abt
    .from(
        '.abtBg', {
        opacity: 0,
        y: 50
    }
    )


const abt2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.aboutMe',
        start: 'top center-=20%',
        end: 'bottom center'
    }
})

abt2
    .from(
        ['.abtinfo h1', '.abtinfo p', '.hire'], {
        opacity: 0,
        y: 50
    }
    )
    .from(
        '.skillbar .skills', {
        opacity: 0,
        y: 100,
    }, 0
    )
    .to(
        '.skills .html', {
        width: "95%"
    }
    )
    .to(
        '.skills .css', {
        width: "89%"
    }
    )
    .to(
        '.skills .js', {
        width: "78%"
    }
    )
    .to(
        '.skills .react', {
        width: "75%"
    }
    )

const serve = gsap.timeline({
    scrollTrigger: {
        trigger: '.services',
        start: 'top center',
        end: 'bottom center+=20%',
    }
})

serve
    .from(
        '.heading', {
        opacity: 0,
        y: 40
    }
    )
    .from(
        '.containeri', {
        opacity: 0,
        y: 40,
        duration: 0.1
    }
    )


const test = gsap.timeline({
    scrollTrigger: {
        trigger: '.testimonials',
        start: 'top center+=10%',
        end: 'bottom center'
    }
})

test
    .from(
        '.testi', {
        opacity: 0,
        y: 50
    }
    )
    .from(
        '.slider-area', {
        opacity: 0,
        y: 50,
        duration: 1
    }
    )

const partner = gsap.timeline({
    scrollTrigger: {
        trigger: '.partners',
        start: 'top center+=20%',
        end: 'bottom center'
    }
})

partner
    .from(
        '.partners h1', {
        opacity: 0
    }
    )
    .from(
        '.partners .pimg img', {
        opacity: 0,
        stagger: 0.2
    }
    )

const foot = gsap.timeline({
    scrollTrigger: {
        trigger: 'footer',
        start: 'top center+=35%',
        end: 'bottom center'
    }
})
foot
    .from(
        'footer',{
            opacity:0
        }
    )