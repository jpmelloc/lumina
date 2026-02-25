// sistema de FAQ

const faqs = document.querySelectorAll('.cont-faq')

faqs.forEach(faq => {
    const header = faq.querySelector('.faq-fechado')

    header.addEventListener('click', () => {
        faq.classList.toggle('ativo')
    })
})

// efeito de scroll

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    // Usar 50px ou mais evita que o efeito "flicker" (pisque) logo no topo
    header.classList.toggle('scroll', window.scrollY > 50);
});

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