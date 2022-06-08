var btnDiminuir = document.getElementById("btnDiminuir");
var btnZerar = document.getElementById("btnZerar");
var btnAumentar = document.getElementById("btnAumentar");
var secaoNumero = document.querySelector(".secaoNumero");
var num = parseInt(secaoNumero.textContent);

btnDiminuir.addEventListener("click",function(){
	num--;
	secaoNumero.textContent = num;
	alteraCor();
})

btnZerar.addEventListener("click",function(){
	num = 0;
	secaoNumero.textContent = num;
	alteraCor();
})

btnAumentar.addEventListener("click",function(){
	num++;
	secaoNumero.textContent = num;
	alteraCor();

})


function alteraCor(){
	if(num < 0){
		secaoNumero.style.color = "red";
	}
	if(num > 0){
		secaoNumero.style.color = "green";
	}
	if(num == 0){
		secaoNumero.style.color = "blueviolet";
	}
}