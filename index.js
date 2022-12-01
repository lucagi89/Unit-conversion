const convertBtn = document.getElementById("convert-btn")
const input = document.getElementById("input-value")
const meterFeet = document.getElementById("meter-feet")
const litersGallons = document.getElementById("liters-gallons")
const kiloPounds = document.getElementById("kilo-pounds")

input.value = ""
initial()

function initial(){
meterFeet.innerHTML = `1 meter = 3.28 feet | 1 foot = 0,3 meters`
 litersGallons.innerHTML = `1 liter = 0.26 gallons | 1 gallon = 3,78 liters`
 kiloPounds.innerHTML = `1 kilo = 2.2 pounds | 1 pound = 0,45 kilos`
}

input.addEventListener("dblclick", function(){
    initial()
})


convertBtn.addEventListener("click", function(){
 let num = input.value
 if (num === ""){
        initial()
 }else{
    meterFeet.innerHTML = `${num} meters = ${(num*3.281).toFixed(3)} feet | ${num} feet = ${(num/3.281).toFixed(3)} meters`
    litersGallons.innerHTML = `${num} liters = ${(num*0.264).toFixed(3)} gallons | ${num} gallons = ${(num/0.264).toFixed(3)} liters`
    kiloPounds.innerHTML = `${num} kilos = ${(num*2.204).toFixed(3)} pounds | ${num} pounds = ${(num/2.204).toFixed(3)} kilos`
    input.value = ""
 }
})