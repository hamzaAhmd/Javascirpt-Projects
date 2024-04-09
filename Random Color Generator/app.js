function coolor() {
    let Hash = "#";
    let RandomNumber = Math.floor(Math.random() *  16777215);
    let RandomCode = Hash +  RandomNumber.toString(16);
    document.body.style.backgroundColor = RandomCode;
    document.getElementById("HexCode").innerHTML = RandomCode;
    console.log(RandomNumber)
    
}

coolor()