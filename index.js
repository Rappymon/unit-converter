/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-el")
const lenvolmassBtn = document.getElementById("lenvolmass-el")
const temperatureBtn = document.getElementById("temperature-el")
const firstTitleEl = document.getElementById("firsttitle-el")
const secondTitleEl = document.getElementById("secondtitle-el")
const thirdTitleEl = document.getElementById("thirdtitle-el")
const firstTextEl = document.getElementById("firsttext-el")
const secondTextEl = document.getElementById("secondtext-el")
const thirdTextEl = document.getElementById("thirdtext-el")
let firstString = ""
let secondString = ""
let thirdString = ""
let isTemperature = false

lenvolmassBtn.addEventListener("click", function(){
    isTemperature = false
    changeToLenvolmass()
})

temperatureBtn.addEventListener("click", function(){
    isTemperature = true
    changeToTemperature()
})

convertBtn.addEventListener("click", function(){
    let input = inputEl.value
    if (input === ""){
        alert("Enter a value!")
    }
    else{
        input = Number(inputEl.value)
        if (isTemperature){
            firstString = `
                ${input}° Celsius = ${((input * (9/5))+32).toFixed(2)}° Fahrenheit | ${input} Celsius = ${(input + 273.15).toFixed(2)} Kelvin
                `
            secondString = `
                ${input}° Fahrenheit = ${((input - 32) * (5/9)).toFixed(2)}° Celsius | ${input}° Fahrenheit = ${(((input - 32) * (5/9))+ 273.15).toFixed(2)} Kelvin
                `
                    
            thirdString = `
                ${input} Kelvin = ${(input - 273.15).toFixed(2)}° Celsius | ${input} Kelvin = ${(((input - 273.15) * (9/5))+32).toFixed(2)}° Fahrenheit
                `
        replaceDOM()
        }
        else{
            firstString = `
                    ${input} meters = ${(input * 3.281).toFixed(3)} feet | ${input} feet = ${(input / 3.281).toFixed(3)}  meters
                    `
            secondString = `
                    ${input} liters = ${(input * 0.264).toFixed(3)} gallons | ${input} gallons = ${(input / 0.264).toFixed(3)}  liters
                    `
                    
            thirdString = `
                    ${input} kilos = ${(input * 2.204).toFixed(3)} pounds | ${input} pounds = ${(input / 2.204).toFixed(3)}  kilos
                    `
            replaceDOM()
        }
    }
})

function replaceDOM(){
    firstTextEl.textContent = firstString
    secondTextEl.textContent = secondString
    thirdTextEl.textContent = thirdString
}

function changeToLenvolmass() {
    firstTitleEl.textContent = "Length (Meter/Feet)"
    firstTextEl.textContent = "1 meter = 3.281 feet | 1 feet = 0.305 meters"
    secondTitleEl.textContent = "Volume (Liters/Gallons)"
    secondTextEl.textContent = "1 liter = 0.264 gallons | 1 gallon = 3.788 liters"
    thirdTitleEl.textContent = "Mass (Kilograms/Pounds)" 
    thirdTextEl.textContent =  "1 kilo = 2.204 pounds | 1 pound = 0.454 kilos"
}

function changeToTemperature() {
    firstTitleEl.textContent = "°Celsius"
    firstTextEl.textContent = "° Celsius -> ° Fahrenheit = (°C x 9/5) + 32 | ° Celsius -> Kelvin = °C + 273.15"
    secondTitleEl.textContent = "°Fahrenheit"
    secondTextEl.textContent = "° Fahrenheit -> ° Celsius = (°F - 32) x 5/9 | ° Fahrenheit -> Kelvin = [(°F - 32) x 5/9] + 273.15"
    thirdTitleEl.textContent = "Kelvin" 
    thirdTextEl.textContent =  "Kelvin -> ° Celsius = K - 273.15 | Kelvin -> ° Fahrenheit = [(K - 273.15) x 9/5] + 32"
}