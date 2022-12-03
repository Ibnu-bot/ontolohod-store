document.getElementById("year").innerHTML = new Date().getFullYear();

const menuToogle = document.querySelector('.menu-toogle input');
const nav = document.querySelector('nav ul');

menuToogle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});

function chat() {
    const message = 'Halo min saya mau tanya nih...'
    const whatsapp = `https://wa.me/6283824887783?text=${message}`
    open(whatsapp, "_blank")
  }
function redirinstagram() {
    window.location.href = "https://instagram.com/ibnuhasan029"
}

function redirmailto() {
    window.location.href = "mailto:ibnuibnu239@gmail.com"
}