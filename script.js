const Xbutton = document.querySelector('.hide-aside')
const asideBar= document.querySelector('.aside-bar')
const hamburgerBtn =document.querySelector('.hamburger-btn')



Xbutton.addEventListener('click',()=>{
    asideBar.classList.add('hide')
})

hamburgerBtn.addEventListener('click',()=>{
    asideBar.classList.remove('hide')
})