let x = document.getElementById("nav")
let m = document.getElementById("arrow")



window.onscroll = function(){
    if(window.scrollY > 30){
        m.style.display = 'block'
        x.style.backgroundImage = 'linear-gradient(to right, #002649, #002649, #00162a )'
        x.style.border = 'none'
    }
    else{
        m.style.display = 'none'
        x.style.background = '#00162a'
    }
}


m.onclick = function(){
    scroll({
        left: 0,
        top: 0,
        behavior: "smooth",
    })
}

