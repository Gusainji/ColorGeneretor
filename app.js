const getcolor = () =>{
    //color code are in hexa-decimal number
    const randomNumber = Math.floor(Math.random() * 16777215);
    // console.log(randomNumber);
    const randomCode = "#" + randomNumber.toString(16);
    // console.log(randomNumber);
    // console.log(randomCode);
    document.body.style.backgroundColor = randomCode; //This will allow to change the random color
    document.getElementById("color-code").innerText = randomCode; //This will allow to put random code number
    navigator.clipboard.writeText(randomCode)   //This will allow to copy the randomcode
}

document.getElementById("btn").addEventListener(
    "click",
    getcolor
)

getcolor();