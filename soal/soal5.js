function generateSlug(judul) {
    return judul.toLowerCase().split('').map(e => {
        if(e == " "){
            return "-"
        }else{
            return e
        }
    }).join("")
}