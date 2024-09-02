function pemenangPermainan(pilihanAndi, pilihanBudi) {
    if(pilihanAndi == pilihanBudi){
        return "Seri"
    }else if((pilihanAndi == "batu" && pilihanBudi=="gunting") || (pilihanAndi == "kertas" && pilihanBudi=="batu") || (pilihanAndi == "gunting" && pilihanBudi=="kertas")){
        return "Andi"
    }else{
        return "Budi"
    }
}