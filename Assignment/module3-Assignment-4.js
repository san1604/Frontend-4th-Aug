let hieght = prompt("Enter Height")
let width = prompt("Enter Width")
let length = prompt("Enter Height")

if ((isNaN(hieght) || hieght <= 0) || (isNaN(length) || length <= 0) || (isNaN(width) || width <= 0)) {
    alert("The data entered is invalid")
}
else {
    const volume = hieght * width * length
    alert(volume)
}
// const volume = hieght*width*length
// alert(volume);