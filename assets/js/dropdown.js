document.addEventListener("DOMContentLoaded", () => {

    activateFirstDropdownItem()

    document.querySelectorAll(".dropdown__item-header").forEach((dropdownHeader) => {
        dropdownHeader.addEventListener("click", ({ target }) => {
            closeAllItemsOfCurrentDropdown(target)
            const dropdownContent = target.closest(".dropdown__item").querySelector(".dropdown__item-content")
            if (dropdownContent.closest(".dropdown__item").classList.contains("open")) {
                closeDropDownContent(dropdownContent)
            } else {
                openDropdownContent(dropdownContent)
            }
        })
    })
})

function activateFirstDropdownItem() {
    document.querySelectorAll(".dropdown").forEach(dropdown => {
        const dropdownItem = dropdown.querySelector(".dropdown__item")
        const dropdownContent = dropdownItem.closest(".dropdown__item").querySelector(".dropdown__item-content")
        openDropdownContent(dropdownContent)
    })
}

function openDropdownContent(dropdownContent) {
    const dropdownContentHeight = dropdownContent.scrollHeight
    dropdownContent.style.maxHeight = dropdownContentHeight + "px"
    dropdownContent.closest(".dropdown__item").classList.add("open")

}

function closeDropDownContent(dropdownContent) {
    dropdownContent.style.maxHeight = "0px"
    dropdownContent.closest(".dropdown__item").classList.remove("open")
}

function closeAllItemsOfCurrentDropdown(target) {
    if (target.closest(".dropdown__item").classList.contains("open")) return
    const dropdown = target.closest(".dropdown")
    dropdown.querySelectorAll(".dropdown__item").forEach(dropdownItem => {
        const dropdownContent = dropdownItem.closest(".dropdown__item").querySelector(".dropdown__item-content")
        closeDropDownContent(dropdownContent)
    })
}