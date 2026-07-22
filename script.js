function startPortal(){

document.getElementById("formPage").style.display="none";

document.getElementById("loadingPage").style.display="block";

setTimeout(function(){

document.getElementById("loadingPage").style.display="none";

document.getElementById("sorryPage").style.display="block";

},3000);

}

function forgive(){

document.getElementById("sorryPage").style.display="none";

document.getElementById("finalPage").style.display="block";

}
