
//------------toggle menu-----------------
var menuItems=document.getElementById("MenuItems");
menuItems.style.maxHeight="0px"
function menutoggle(){
if(menuItems.style.maxHeight==="0px"){
    menuItems.style.maxHeight="200px"
}
else{
    menuItems.style.maxHeight="0px"
}
}



//--------------Country PopUp---------------

function countryPopUp(){
    document.getElementById("selectCountry").style.display = "block";
}

var windowCross=document.getElementById("window-cross");
windowCross.addEventListener("click",function(){
     document.getElementById("selectCountry").style.display = "none";
})

//------------------Image Click----------------
function imageClick(id){
window.location.href = "../country-college/"+id+".html";
}

//----------------------Change Div----------------

function changediv(id){
console.log(id);
    if(id==="div-1"){
        document.getElementById("div-col-1").style.display="block";
        document.getElementById("div-col-2").style.display="none";
        document.getElementById("div-col-3").style.display="none";
        document.getElementById("div-col-4").style.display="none";

        document.getElementById("div-1").style.backgroundColor="#ff523b";
        document.getElementById("div-2").style.backgroundColor="white";
        document.getElementById("div-3").style.backgroundColor="white";
        document.getElementById("div-4").style.backgroundColor="white";
    }

    else if(id==="div-2"){
        document.getElementById("div-col-1").style.display="none";
                document.getElementById("div-col-2").style.display="block";
                document.getElementById("div-col-3").style.display="none";
                document.getElementById("div-col-4").style.display="none";

                        document.getElementById("div-1").style.backgroundColor="white";
        document.getElementById("div-2").style.backgroundColor="#ff523b";
        document.getElementById("div-3").style.backgroundColor="white";
        document.getElementById("div-4").style.backgroundColor="white";
    }
else     if(id==="div-3"){
        document.getElementById("div-col-1").style.display="none";
                document.getElementById("div-col-2").style.display="none";
                document.getElementById("div-col-3").style.display="block";
                document.getElementById("div-col-4").style.display="none";

                
                        document.getElementById("div-1").style.backgroundColor="white";
        document.getElementById("div-2").style.backgroundColor="white";
        document.getElementById("div-3").style.backgroundColor="#ff523b";
        document.getElementById("div-4").style.backgroundColor="white";
    }
    else     if(id==="div-4"){
        document.getElementById("div-col-1").style.display="none";
                document.getElementById("div-col-2").style.display="none";
                document.getElementById("div-col-3").style.display="none";
                document.getElementById("div-col-4").style.display="block";

                                        document.getElementById("div-1").style.backgroundColor="white";
        document.getElementById("div-2").style.backgroundColor="white";
        document.getElementById("div-3").style.backgroundColor="white";
        document.getElementById("div-4").style.backgroundColor="#ff523b";
    }
}

