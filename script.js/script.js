let  inputs =document.getElementsByClassName('formulario__input');
for (var i =0; i < inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=0){
            this.nextElementSibling.classList.add('fijar');
        }else{
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}
let  enviar = document.querySelector(".formulario__submit");
enviar.addEventListener("click",() =>{
    alert("Recibimos la Informacion")
})
