document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".animate-umber").forEach((item) => {
        item.innerText = ""
        const number = item.dataset.number
        let currentNumber = 0
        let animationSpeed = 70
        const numberAnimationIneerval = setInterval(() => {
            item.innerText = currentNumber + "+"

            if (currentNumber == number) {
                clearInterval(numberAnimationIneerval)
            }
            currentNumber++
        }, animationSpeed)
    })
})