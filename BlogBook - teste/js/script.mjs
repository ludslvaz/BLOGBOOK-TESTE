import FluxRequest from "../lib/Flux/FluxyV1/FluxAPI/lib/launcher/FluxRequest.mjs";
import { Simplifier } from "../lib/Flux/FluxyV1/FluxAPI/lib/util/Simplifier.mjs";
 
const    simplifier = new Simplifier()

const    noticys = Object.values(document.getElementsByClassName('card'));
const    noticys_img = document.getElementsByClassName('imgcard')
const    noticys_title = document.getElementsByClassName('title_card')
const    noticys_pg = document.getElementsByClassName('pg_card')
const    banner = document.getElementById('bannerMain');
const    titleBanner = document.querySelector('h3')
const 
    size = noticys.length,
    storage = localStorage,
    fluxBlog = new FluxRequest("http://localhost:8080/blog"),
    response = Object.values(await fluxBlog.fluxStart());
    const responseNoticy = response.filter(function (element) { return (element.type) === "NOTICIA"})
    

    const bannerMain = response[simplifier.random(size)]
    // console.log(bannerMain)
    // banner.src = bannerMain.pathIcon
    titleBanner.textContent = bannerMain.title


    
    noticys.forEach( elements => {
        let idNoticy = 0
                   idNoticy++;
                   console.log(idNoticy)
            // elements.setAttribute('data-id',id)

    })
    
    for (let index = 0; index < size; index++) {
        const element = noticys[index];
        element.addEventListener('click',
        async (event) => {
            const 
                post = event.currentTarget,
                request = new FluxRequest(`http://localhost:8080/blog/${post.dataset.id}`),
                promise =  await request.fluxStart();
    
            storage.setItem('blog',JSON.stringify(promise[0]))
            open('http://127.0.0.1:5500/sigle%20de%20not%C3%ADcias/index.html')
        })
    }
        
        

