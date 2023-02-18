let username = document.getElementById("username");
let pwd = document.getElementById("password");
let label = document.getElementById("label");
let api = "http://3ca6-210-245-20-161.ngrok.io/login/"
let loading=document.getElementById("popupLoading")
            


// Login

function checkUsername() {
  
    
    let Infor={"username":username.value,
               "password":pwd.value}
       

    fetch(api,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(Infor)
    })
        .then((res)=>{
          
            if (res.status!==200){
            label.style.display="block"
            label.innerHTML = "Tài khoản hoặc mật khẩu không đúng"     
            loading.style.visibility="hidden"    
            return false  
            }else{
                loading.style.opacity='1';
                loading.style.visibility="visible"
                label.style.display = "none"
                username.style.borderColor = "green"
                pwd.style.borderColor = "green"
                setTimeout(function(){window.location.href = "./Home/homepage.html"},3000) 
                return res.json()
            }
        }).then((data) => {
           
            localStorage.setItem("Id", data.id)

            localStorage.setItem( "Token" , data.token)}
            )
    
        

    
}


function Login() {
    if (username.value === "" || pwd.value === "") {
        username.style.borderColor = "red"
        pwd.style.borderColor = "red"
        label.style.display = "block"
        label.innerHTML = "Vui lòng không bỏ trống tài khoản và mật khẩu"
        return false
    }
    checkUsername()
      
   

}

