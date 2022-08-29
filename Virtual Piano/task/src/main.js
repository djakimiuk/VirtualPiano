document.addEventListener("keydown", e =>{
    let arr = ["A", "a", "S", "s", "D", "d", "F", "f", "G", "g", "H", "h", "J", "j", "W", "w", "E", "e", "T", "t", "Y", "y", "U", "u"];
    if(arr.includes(e.key)) {
        let src = `sounds/${e.key.toUpperCase()}.mp3`
        let audio = new Audio(src)
        audio.play();
    } else {
        console.log("Warning! Invalid key!")
    }
})