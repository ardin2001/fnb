function hitungRataRata(nilaiSiswa) {
    let result = 0
    for(let i=0; i<nilaiSiswa.length; i++){
        result+=nilaiSiswa[i]
    }

    // result = result/nilaiSiswa.length
    // if(result % 1 == 0){
    //     return result+".00"
    // }
    // return result

    return (result/nilaiSiswa.length).toFixed(2)
}

console.log(hitungRataRata([80, 85, 88, 95]))
console.log(hitungRataRata([80, 85, 89, 95]))
console.log(hitungRataRata([80, 85, 90, 95]))