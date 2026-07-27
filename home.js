const panel = document.getElementById("panel");

document
.getElementById("musicBtn")
.onclick = ()=>{

panel.classList.add("show");

}

document
.getElementById("close")
.onclick = ()=>{

panel.classList.remove("show");

}