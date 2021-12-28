// nav animation
const nav = document.querySelector('nav')
const navHide = document.querySelector('.hide-nav')
const navTransparent = document.querySelector('.nav-transparent')
const width = document.documentElement.clientWidth
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY
    if (scrolled >= 20 ) {
        navHide.classList.add('position-fixed')
        navHide.style.top = '0';
        navHide.style.transition = '.5s';
        navTransparent.style.transition = '.5s';
    } else {
        navHide.style.top = '-75px';
        navTransparent.style.display = 'block';
        navHide.style.transition = '.5s';
        navTransparent.style.transition = '.5s';
        navHide.classList.remove('fixed-top')
        navTransparent.classList.add('fixed-top')
    }
});

// pop up alert jika atribut link href masih # / belum jelas tujuannya
function notAvailable() {
    const link = document.querySelectorAll('a')
    const alertCard = document.querySelector('.my-alert')
    const elementAlert = document.querySelector(".my-alert span.element-alert")
    const btnClose = document.querySelector(".my-alert .btn-close")
    link.forEach(e => {
        if (e.getAttribute('href') === null && e.getAttribute('name') != null) {
            elementAlert.innerHTML = "Halaman untuk " + e.getAttribute('name') + " masih dalam tahap pengembangan"
            alertCard.classList.remove('d-none')
            setTimeout(() => {
                alertCard.style.margin = '70px auto 0';
                alertCard.style.transition = '.5s';
            }, 0);
        } else {
            return
        }
    });
    btnClose.addEventListener('click', () => {
        alertCard.style.margin = '-180px auto 0';
        alertCard.style.transition = '.5s';
        setTimeout(() => {
            alertCard.classList.add('d-none')
        }, 500);
    })
}
