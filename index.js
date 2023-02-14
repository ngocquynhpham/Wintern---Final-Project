let username = document.getElementById("username");
let pwd = document.getElementById("password");
let label = document.getElementById("label");
let api = "https://sheetdb.io/api/v1/6scb1syc9l8o0?sheet=user"
fetch(api).then((response) => response.json())
    .then((data) => console.log(data))



// Login

function checkUsername() {
    
     fetch(api).then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                console.log(data)
                if(data[i].username===username.value && atob(data[i].password) ===pwd.value)
                {
                    
                        label.style.display = "none"
                        username.style.borderColor = "green"
                        pwd.style.borderColor = "green"
                        window.location.href = "./Home/homepage.html"
                        return true
                }
            } 
                label.innerHTML = "Tài khoản hoặc mật khẩu không đúng"           

        });
    
        

    
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

