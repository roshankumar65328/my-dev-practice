// timeline 
// ek variable me gsap.timeline() dal denge 
// fir jis-jis gsap ko, us timeline wale variable se call karaenge 
// wo gsap line-wise chalenge

var tl = gsap.timeline()
tl.to(".box1", {
    x: 1000,
    rotate: 360,
    scale: 0.5,
    duration: 2,
    delay: 1
})

tl.to(".box2", {
    x: 1000,
    rotate: 360,
    scale: 0.5,
    duration: 2,
    // delay: 3
})

tl.to(".box3", {
    x: 1000,
    rotate: 360,
    scale: 0.5,
    duration: 2,
    // delay: 5
})


// agar gsap.to("",{})
// agar gsap.from("",{}) ke sath timeLine bhi chalana hai tab bhi, ek main cdn se kaam chal jayega
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js" integrity="sha512-NcZdtrT77bJr4STcmsGAESr06BYGE8woZdSdEgqnpyqac7sugNO+Tr4bGwGF3MsnEkGKhU2KL2xh6Ec+BqsaHA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
// isse bhi kaam chal jayega