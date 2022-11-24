fetch("../../../components/AppHeader.html")
    .then((res) => res.text())
    .then(header => {
        document.querySelector("main").insertAdjacentHTML("afterbegin", header)
        burgerMenu()
    })


function burgerMenu() {
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

    document.getElementById("close").addEventListener("click", () => {
        burger.classList.remove("active")
    })
}