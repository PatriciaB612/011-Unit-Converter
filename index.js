const convertBtn = document.getElementById("convert-btn")
const lengthOutput = document.getElementById("length-output")
const volumeOutput = document.getElementById("volume-output")
const massOutput = document.getElementById("mass-output")

convertBtn.addEventListener("click", function converter(){
    
    let initialInput = document.getElementById("initial-input").valueAsNumber 
    const metersToFeet = initialInput / 0.3048
    const feetToMeters = initialInput * 0.3048
    const litersToGallons = initialInput * 0.2641
    const gallonsToLiters = initialInput / 0.2641
    const kgToPounds = initialInput * 2.2046
    const poundsToKg = initialInput / 2.2046
    
  lengthOutput.textContent = `${initialInput} meters = ${metersToFeet.toFixed(3)} feet | ${initialInput} feet = ${feetToMeters.toFixed(3)} meters`
  
  volumeOutput.textContent = `${initialInput} liters = ${litersToGallons.toFixed(3)} gallons | ${initialInput} gallons = ${gallonsToLiters.toFixed(3)} liters`
  
  massOutput.textContent = `${initialInput} kilos = ${kgToPounds.toFixed(3)} | ${initialInput} pounds = ${poundsToKg.toFixed(3)} kilos`
  
})

