let confirmPwd = document.getElementById("confirmPassword")
let email = document.getElementById("email")
let username = document.getElementById("username");
let pwd = document.getElementById("password");
let label = document.getElementById("label");

let api = "https://sheetdb.io/api/v1/6scb1syc9l8o0?sheet=user"
fetch(api).then((response) => response.json())
    .then((data) => console.log(data))

function checkRegisterr(){

     let a= fetch(api).then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                console.log(data)
                if (data[i].username === username.value) {
                    label.innerHTML = "Tài khoản đã tồn tại"
                    label.style.display = "block"
                    return false;
                } else if (data[i].email === email.value) {
                    username.style.borderColor = "green"
                    label.innerHTML = "Email đã tồn tại"
                    label.style.display = "block"
                    return false;
                } else if (!valuePwd) {
                    username.style.borderColor = "green"
                    email.style.borderColor = "green"
                    pwd.style.borderColor = "red"
                    confirmPwd.style.borderColor = "red"
                    label.style.display = "block"
                    label.innerHTML = "Mật khẩu không giống nhau"
                    return false
                } else {
                    pwd.style.borderColor = "green"
                    confirmPwd.style.borderColor = "green"
                    username.style.borderColor = "green"
                    email.style.borderColor = "green"
                    label.style.display = "none"
                }

            }
        })
}

function register() {
    if (pwd.value === '' || confirmPwd.value === "" || email.value === "" || username.value === "") {
        username.style.borderColor = "red"
        pwd.style.borderColor = "red"
        confirmPwd.style.borderColor = "red"
        email.style.borderColor = "red"
        label.style.display = "block"
        label.innerHTML = "Vui lòng không bỏ trống "
        return false
    }
    checkRegisterr()

}


