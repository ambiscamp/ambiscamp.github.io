function checkControl(j) {
    total = 1
    for (let i = 0; i < document.member.ekstraAmbiss.length; i++) {
        if (document.member.ekstraAmbiss[i].checked) {
            total+=1
        }
        if (total > 3) {
            alert("Maksimum piihan hanya 2")
            document.member.ekstraAmbiss[j].checked = false
        }
        return false
    }
}