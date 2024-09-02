function isAnagram(kata1, kata2) {
    return kata1.split("").filter(e => e!=" ").sort().join("") == kata2.split("").filter(e => e!=" ").sort().join("")
}