var headingsToAnimate = Array.from(document.querySelectorAll('h3'))

headingsToAnimate.forEach((each) => {
    each.style.position = 'relative'
    each.style.top = '60px'
    each.style.transition = '0.458s'
})


window.addEventListener('scroll', () => {
    var heightOfWindow = window.innerHeight

    headingsToAnimate.forEach( (each)=> {
        var positionOfElement = each.getBoundingClientRect().top
        if (positionOfElement < heightOfWindow - 30) {
            each.style.top = '0px'
        } else {
            each.style.top = '60px'
        }
    })
})
