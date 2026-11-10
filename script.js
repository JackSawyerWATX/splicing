let original = [1, 2, 3, 4, 5]
let copy = [...original]

copy.splice(2, 1, 6)

console.log(original)
console.log(copy)


let band = ["David Bowie", "Devo", "Talking Heads", "Queen", "Wham!"]
let bandToRemove = band.indexOf("Devo");

console.log(band[1])

if (bandToRemove !== -1) {
	band.splice(bandToRemove, 1)
}

console.log(band)
console.log(band[1])
console.log(band.includes("Devo"))
console.log(band.includes("Queen"))