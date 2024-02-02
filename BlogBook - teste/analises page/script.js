function toggleNotification(divId){
    let notificationDiv = document.getElementById(divId)
    notificationDiv.style.display = (notificationDiv.style.display === "none") ? "block" : "none"
}
document.querySelector('.trêsPontinhos').addEventListener('click', toggleNotification)
