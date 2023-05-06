const btnMobile = document.getElementById('btn-mobile')
const contato = document.getElementById('formContato')
const nomeContato = document.getElementById('nomeContato')
const fechaMenu1 = document.getElementById('fechaMenu1')
const fechaMenu2 = document.getElementById('fechaMenu2')
const fechaMenu3 = document.getElementById('fechaMenu3')


function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault()

    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

function dadosForm() {
    alert(`Seus dados foram enviados com sucesso! \nEntraremos em contato em breve ${nomeContato.value}`)
}

function menu() {
    let click = document.getElementById('hamburger').click()
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)
contato.addEventListener('submit', dadosForm)
fechaMenu1.addEventListener('click', menu)
fechaMenu2.addEventListener('click', menu)
fechaMenu3.addEventListener('click', menu)