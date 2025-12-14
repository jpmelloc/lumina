// sistema de FAQ

const faqs = document.querySelectorAll('.cont-faq')

faqs.forEach(faq => {
    const header = faq.querySelector('.faq-fechado')

    header.addEventListener('click', () => {
        faq.classList.toggle('ativo')
    })
})

// efeito de scroll

window.addEventListener('scroll', () => {
    const header = document.querySelector('header')

    if (window.scrollY > 10) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})

// menu hamburguer

const menu = document.querySelector('.menu')
const nav = document.querySelector('.nav')
const links = document.querySelectorAll('.links')
const body = document.body

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo')
    nav.classList.toggle('ativo')
    body.classList.toggle('menu-aberto')
})

links.forEach(val => {
    val.addEventListener('click', () => {
        menu.classList.remove('ativo')
        nav.classList.remove('ativo')
        body.classList.remove('menu-aberto')
    })
})