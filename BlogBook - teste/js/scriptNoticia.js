const 
    banner = document.getElementById('img_sigle'),
    title = document.getElementById('title_sigle'),
    textPhar1 = document.getElementById('txt_sigle'),
    donoUser = document.getElementById('userName_single'),
    img = document.getElementById('user_sigle');




const noticyStorage = localStorage;

const obj = JSON.parse(noticyStorage.getItem('blog'))
banner.setAttribute('src',obj.pathIcon)
title.textContent = obj.title
textPhar1.textContent = obj.comentario
donoUser.textContent = obj.DonoPost
img.src = obj.urlIcon
