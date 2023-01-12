const bookMarkContainer = document.querySelector('.bookmark-btn-container')
const bookMarkBtn = document.querySelector('.bookmark-btn')
const bookMarkImg = document.querySelector('.bookmark-img')
const backProjectBtn = document.getElementById('back-project-btn')
const header = document.querySelector('.main-header')
const main = document.querySelector('.main')
const closeModal = document.querySelector('.modal-cancel-icon')
const thanksBtn = document.querySelector('.thanks-btn')
const thankSection = document.querySelector('.thanks-section')
const openThanksBtn = document.querySelectorAll('.second-btn')
const modalSection = document.querySelector('.open')
const commonCheckboxes = document.querySelectorAll('.select-input')
const containerOutline = document.querySelectorAll('.container-outline')
const showUserInput = document.querySelector('.user-entry-container')
const openMenu = document.querySelector('.open-icon')
const closeMenu = document.querySelector('.close-icon')
const navBar =document.querySelector('.navbar')


// BOOKMARK BTN 


bookMarkContainer.addEventListener('click', () => {
    
    if(bookMarkBtn.textContent === "Bookmark"){
        bookMarkBtn.textContent = "Bookmarked"
        bookMarkBtn.classList.add('bookmarked')
        bookMarkImg.classList.add('filter')

    }else {
        bookMarkBtn.innerHTML = "Bookmark"
        bookMarkBtn.classList.remove('bookmarked')
        bookMarkImg.classList.remove('filter')
    }
})

// BACK_PROJECT BTN 

backProjectBtn.addEventListener('click', () => {
    modalSection.classList.remove('none')
})

// CLOSE MODAL 

closeModal.addEventListener('click', () => {
    modalSection.classList.add('none')
})

// OPEN THANKS SECTION 

openThanksBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
        thankSection.classList.remove('none')
    })
})
// THANKS BTN 

thanksBtn.addEventListener('click', () => {
    location.reload()
})

// CHECK BOXES 


commonCheckboxes.forEach((elem, index) => {

    elem.addEventListener('click', () => {

        checkboxIndex = index
        if (checkboxIndex === 1) {
            showUserInput.classList.toggle('none')
        }
        containerOutline.forEach((item, index) => {

            containerIndex = index
            console.log(containerIndex)

            if (checkboxIndex === containerIndex) {
                item.classList.toggle('clicked')
            }


        })

    })
})


// OPEN MENU 

openMenu.addEventListener('click',()=>{
    navBar.classList.add('flex-nav')
    openMenu.classList.add('none')
    closeMenu.classList.remove('none')
})

// CLOSE MENU 


closeMenu.addEventListener('click',()=>{
    navBar.classList.remove('flex-nav')
    openMenu.classList.remove('none')
    closeMenu.classList.add('none')
})