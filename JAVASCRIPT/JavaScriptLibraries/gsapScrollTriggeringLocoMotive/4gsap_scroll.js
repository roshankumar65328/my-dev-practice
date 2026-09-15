gsap.from(".page1 .circle", {
    scale:0,
    delay:1,
    duration:2,
    rotate:720
})
// gsap.from(".page2 .circle", {
//     scale:0,
//     delay:1, 
//     duration:2,
//     rotate:720,
//     scrollTrigger:".page2 .circle"   // jis element pe scrollTrigger laga rahe h, uska jab 50% height screen par scroll ho jayega tab gsap chal jayega
// })
gsap.from(".page2 .circle",{
    scale:0,
    duration:1,
    rotate:720,
    // scrollTrigger:".page .circle"   // aam zindgi - full animation once
    scrollTrigger:{                 // mentos zindgi - animate with scroll
        trigger: ".page2 .circle",
        scroller:"body",
        start:"top 60%",
        scrub:2,        // scrub hame animation back karta hai smoothly kab hum scroll-back karte hai,  value can be given b/w   (1 - 5)
        end:"top 30%",
        markers:true
    }
})