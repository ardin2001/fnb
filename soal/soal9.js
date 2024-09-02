function hitungPenggunaanPickaxe(kekuatanBatu, bahanPickaxe, jumlahPenggunaan) {
    if(bahanPickaxe=="batu"){
        bahanPickaxe=1
    }else if(bahanPickaxe=="besi"){
        bahanPickaxe=2
    }else{
        bahanPickaxe=3
    }
    return kekuatanBatu-bahanPickaxe*jumlahPenggunaan
}