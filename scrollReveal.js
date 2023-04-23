window.sr = ScrollReveal({ reset: true })

ScrollReveal().reveal('.area-1', {
    delay: 500,
    duration: 2000,
    interval: 200,
    easing: 'ease-in-out',
    rotate:{
        x: 0,
        y: 0,
        z: 0
    },
    scale: 0.8,
    reset: true
    
})
ScrollReveal().reveal('.area-2', {
    interval: 200, 
    duration: 2000,
    easing: 'ease-in',
    distance: '150%',
    origin: 'left',
    opacity: 0.8
})
ScrollReveal().reveal('.area-3', {
    delay: 900,
    duration: 2000,
    interval: 200,
    
    rotate:{
        x: 0,
        y: 100,
        z: 50
    }

})