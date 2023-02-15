let confirmPwd = document.getElementById("confirmPassword")
let email = document.getElementById("email")
let pwd = document.getElementById("password");
let olbPwd = document.getElementById("oldPassword")
let label = document.getElementById("label");
let api = "http://3ca6-210-245-20-161.ngrok.io/api/v1/users/set_password/"



function check(){
    let infor = {
        'old_password': olbPwd.value,
        'new_password': pwd.value,
    }
    console.log(infor)
    fetch(api, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorage.getItem('Token')
        },
        body: JSON.stringify(infor)

    }
    ).then((res) => {
        if (checkSamePassword(pwd.value,confirmPwd.value)) {
            
            if (res.status === 200) {
                localStorage.removeItem('Token')
                window.location.href='/index.html'
                return res.json()
            } else {
                olbPwd.style.borderColor = "red"
                pwd.style.borderColor = "red"
                confirmPwd.style.borderColor = "red"
                label.style.display = "block"
                label.innerHTML = "Mật khẩu cũ không chính xác"
                return false
            }
        }else{
            olbPwd.style.borderColor = "red"
            pwd.style.borderColor = "red"
            confirmPwd.style.borderColor = "red"
            label.style.display = "block"
            label.innerHTML = "Mật khẩu không giống nhau"
                return false
        }

    })
       
}
function forgotPassword() {
   
    
        if (pwd.value === "" || confirmPwd.value === "" || olbPwd.value === "") {
            pwd.style.borderColor = "red"
            confirmPwd.style.borderColor = "red"
            olbPwd.style.borderColor = "red"
            label.style.display = "block"
            label.innerHTML = "Vui lòng không bỏ trống "
            return false
        } check()
}
