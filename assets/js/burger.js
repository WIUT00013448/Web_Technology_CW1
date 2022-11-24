document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger")
    const burgerButton = document.querySelector(".burger__button")

    document.addEventListener("click", () => {
        burger.classList.remove("active")
    })

    burger.addEventListener("click", (e) => {
        e.stopPropagation()
    })

    burgerButton.addEventListener("click", () => {
        burger.classList.toggle("active")
    })
})