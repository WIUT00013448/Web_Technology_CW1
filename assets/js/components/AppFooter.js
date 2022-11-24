fetch("../../../components/AppFooter.html")
    .then((res) => res.text())
    .then(header => {
        document.querySelector("body").insertAdjacentHTML("beforeend", header)
    })