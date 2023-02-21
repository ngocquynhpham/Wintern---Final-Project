function Like(e,id){
    iconLikeDefault=document.getElementById(id)
   let icon= e.target.classList
    if(icon.style.display!=="none"){
        icon.style.display="none";
        icon.style.display="inline";


    }else{
        iconLikeDefault.style.display="inline";
        iconLikeActive.style.display="none";
       
    }


}


function showpwd(e, id) {
    let element = document.getElementById(id);
    let icon = e.target.classList;
    console.log(icon)   
    if (element.type === "text") {
        element.type = "password";
        icon.add("fa-eye-slash");
        icon.remove("fa-eye");
    }
    else {
        element.type = "text";
        icon.remove("fa-eye-slash");
        icon.add("fa-eye");
    }
}

