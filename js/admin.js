function createTurn(){

const date = prompt("Data")
const start = prompt("Ora inizio")
const end = prompt("Ora fine")

db.collection("turns").add({
date:date,
start:start,
end:end,
capacity:3
})

alert("Turno creato")

}
