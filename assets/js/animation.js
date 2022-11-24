document.addEventListener("DOMContentLoaded", () => {

    animateItems()

    let lastScroll = 0;

    window.addEventListener("scroll", () => {
        var scroll = window.pageYOffset || document.documentElement.scrollTop;
        if (scroll > lastScroll) {
            // Scrolling down
            animateItems()
        }
        lastScroll = scroll <= 0 ? 0 : scroll;
    })

})

function animateItems() {
    document.querySelectorAll(".animate").forEach((item) => {
        if (itemIsVisible(item) || itemIsInTop(item)) {
            let animation = [...item.classList].filter((itemClass) => itemClass.match(/fade-/))
            if (animation.length) item.classList.remove(animation)
        }

    })
}

function itemIsVisible(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    if (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top < (window.pageYOffset + window.innerHeight) &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset
    );
}

function itemIsInTop(el) {
    var top = el.offsetTop;

    return top <= window.pageYOffset;

}