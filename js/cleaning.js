function loadCleaning(){

db.collection("cleaning_schedule").get().then(snapshot=>{

let html=""

snapshot.forEach(doc=>{

const data=doc.data()

html+=`

<div>

<h3>${data.start} - ${data.end}</h3>

<p>${data.congregation}</p>
<p>${data.group}</p>

</div>

`

})

document.getElementById("cleaning").innerHTML=html

})

}