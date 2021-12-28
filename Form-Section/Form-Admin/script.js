const rcW6ZMFYlz = 'https://script.google.com/macros/s/AKfycbxt3ZMtXCOuHzeIE2erIlgNK2smRv5rZBc8Ca_PqMcwhDeammabIuWBttmsSAQpUqac/exec'
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');
const formAdmin = document.forms['admin'];

formAdmin.addEventListener('submit', e => {
    e.preventDefault()
    // ketika submit di klik
    // tampilkan tombol loading, hilangkan kirim
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');
    fetch(rcW6ZMFYlz, { method: 'POST', body: new FormData(formAdmin)})
    .then(response => {
        // tampilkan tombol kirim, hilangkan loading
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');
        // tampilkan alert
        myAlert.classList.toggle('d-none');
        // reset form
        formAdmin.reset();
        console.log('Success!', response)
    })
    .catch(error => console.error('Error!', error.message))
})
// -----------------------------------------------------
function checkControl(j) {
    total = 1
    let check = document.admin.jabatan
    for (let i = 0; i < check.length; i++) {
        if (check[i].checked) {
            total+=1
        }
    }
    if (total > 2) {
        alert("Eitss, maksimum piihan hanya 1 ya :)")
        check[j-1].checked = false
    }
    return false;
}
function checkControl(j) {
    total = 1
    let check = document.admin.jabatan
    const alertCard = document.querySelector('.my-alert-max')
    const elementAlert = document.querySelector(".my-alert-max span.element-alert")
    const btnClose = document.querySelector(".my-alert-max .btn-close")
    for (let i = 0; i < check.length; i++) {
        if (check[i].checked) {
            total+=1
        }
    }
    if (total > 2) {
        elementAlert.innerHTML = "Eitss, maksimum piihan hanya 1 ya :)"
        alertCard.classList.remove('d-none')
        setTimeout(() => {
            alertCard.style.margin = '70px auto 0';
            alertCard.style.transition = '.5s';
        }, 0);
        check[j-1].checked = false
    }
    btnClose.addEventListener('click', () => {
        alertCard.style.margin = '-100px auto 0';
        alertCard.style.transition = '.5s';
        setTimeout(() => {
            alertCard.classList.add('d-none')
        }, 500);
    })
    return false;
}