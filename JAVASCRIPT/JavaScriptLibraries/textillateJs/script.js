gsap.from("h1",{
    opacity: 0,
    y: 50,
    duration: 1,
    onStart: function(){
        $('h1').textillate({ 
            in: { effect: 'fadeIn' }
        });     // ye line from textillate github, direct js file me rakhenge tab bhi chal jayega gsap ke sath scroll ke sath animate hoga -_-
}
});