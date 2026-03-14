function bookTurn(turnId){

const name=prompt("Nome e Cognome")
const phone=prompt("Telefono")

db.collection("reservations").add({

name:name,
phone:phone,
turnId:turnId,
createdAt:new Date()

})

alert("Prenotazione salvata")

}