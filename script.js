const btn1 = document.getElementById('btn1');
const body1 = document.getElementById('body1');
const body2 = document.getElementById('body2');

    btn1.addEventListener('click' , function(){

        body1.style.display = "none";
        body2.style.display = "flex";

const text = "Khaaeeyyy... is that you?";
const typing = document.getElementById("typing");

let index = 0;

function typeWriter(){

    if(index < text.length){

        typing.textContent += text.charAt(index);
        index++;

        setTimeout(typeWriter, 80);

    }

}

typeWriter();



    });


const btn2 = document.getElementById('btn2');
const body3 = document.getElementById('body3');

    btn2.addEventListener('click' , function (){

        body2.style.display = 'none';
        body3.style.display = 'flex';
        //ako siyang ge dont show to sa settings AHHAHAa

    });

const btn3 = document.getElementById('btn3');

btn3.addEventListener('click' , function(){

    window.location.href = 'home.html' 

});

