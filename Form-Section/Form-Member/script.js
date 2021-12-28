// url to script google
const sP1UyJoMp4YLEuNSfA =
    "https://script.google.com/macros/s/AKfycbzpDBLH0ZMPNgKRuobR_CHk5IGxuE6J12PVWQN_WUbO5CzPgb7z3vmHY-Ce8fyF3hE/exec"
// button
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');
const formMember = document.forms['member'];
// kelas variables untuk menyimpan value yang di check
let kelasS = document.querySelectorAll('input[name="kelass"]');
let kelas = ''
let kelas_input = document.querySelector('input[name="kelas"]');
// ekstra ambis variables untuk menyimpan value yang di check
let ekstraAmbisS = document.querySelectorAll('input[name="ekstraAmbiss"]');
let ekstraAmbis = ''
let ekstraAmbis_input = document.querySelector('input[name="ekstraAmbis"]');
// ketika form di submit
formMember.addEventListener('submit', e => {
    e.preventDefault()
    // ketika submit di klik
    // tampilkan tombol loading, hilangkan kirim
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');

    // dibuat pengulangan sesuai banyaknya checkbox yang di check (untuk KELAS)
    for (var i = 0; i < kelasS.length; i++) {
        if (kelasS[i].checked === true) {
            // memasukkan value kelas yang di check ke dalam kelasS yang merupakan tampungan untuk banyak value yang di check
            kelas += kelasS[i].value + ', '
        }
    }
    kelas_input.setAttribute("value", kelas)

    // dibuat pengulangan sesuai banyaknya checkbox yang di check (untuk EKSTRA AMBIS)
    for (var i = 0; i < ekstraAmbisS.length; i++) {
        if (ekstraAmbisS[i].checked === true) {
            // memasukkan value ekstraAmbis yang di check ke dalam ekstraAmbisS yang merupakan tampungan untuk banyak value yang di check
            ekstraAmbis += ekstraAmbisS[i].value + ', '
        }
    }
    ekstraAmbis_input.setAttribute("value", ekstraAmbis)
    fetch(sP1UyJoMp4YLEuNSfA, {
            method: 'POST',
            body: new FormData(formMember)
        })
        .then(response => {
            // tampilkan tombol kirim, hilangkan loading
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            // tampilkan alert
            myAlert.classList.toggle('d-none');
            // reset form
            formMember.reset();
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})
// ------------------------------------------------
function checkControl(j) {
    total = 1
    let check = document.member.ekstraAmbiss
    const alertCard = document.querySelector('.my-alert-max')
    const elementAlert = document.querySelector(".my-alert-max span.element-alert")
    const btnClose = document.querySelector(".my-alert-max .btn-close")
    for (let i = 0; i < check.length; i++) {
        if (check[i].checked) {
            total+=1
        }
    }
    if (total > 3) {
        elementAlert.innerHTML = "Eitss, maksimum piihan hanya 2 ya :)"
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
