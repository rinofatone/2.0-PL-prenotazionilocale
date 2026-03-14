function loadCalendar(){

db.collection("turns").get().then(snapshot=>{

let html=""

snapshot.forEach(doc=>{

const turn=doc.data()

html+=`
<div class="slot">

<h3>${turn.date}</h3>

<p>${turn.start} - ${turn.end}</p>

<button onclick="bookTurn('${doc.id}')">Prenota</button>

</div>
`

})

document.getElementById("calendar").innerHTML=html

})

}