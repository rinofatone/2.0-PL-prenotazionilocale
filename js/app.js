function showPage(page){

document.getElementById("calendar").style.display="none"
document.getElementById("cleaning").style.display="none"
document.getElementById("admin").style.display="none"

document.getElementById(page).style.display="block"

if(page==="calendar") loadCalendar()
if(page==="cleaning") loadCleaning()

}