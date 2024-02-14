gsap.registerPlugin(ScrollTrigger)

gsap.from('.logo div', {
    opacity: 0,
    delay: 1,
    duration: 0.5,
    x: 40
})

gsap.from('.logo img', {
    opacity: 0,
    delay: 1.5,
    duration: 0.5
})

const menu_items = document.querySelector('.menu-items')
gsap.from(menu_items.children, {
    opacity: 0,
    x: 0,
    duration: 1,
    delay: 2,
    stagger: {
        amount: 1
    }
})

gsap.utils.toArray('.headtitle').forEach(title=>{
    gsap.fromTo(title, {
        letterSpacing: '10px',
        opacity: 0,
        x: -300,
        skewX: 65
    }, {
        letterSpacing: 0,
        opacity: 1,
        x: 0,
        skewX: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: title
    })
})

gsap.utils.toArray('.subtitle').forEach(title=>{
    gsap.fromTo(title, {
        opacity: 0,
        y: 30
    }, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1.5,
        scrollTrigger: title
    })
})

gsap.from('.offerbutton', {
    opacity: 0,
    delay: 2.5,
    duration: 0.5
})
