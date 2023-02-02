let username = document.getElementById("username");
let pwd = document.getElementById("password");
let label = document.getElementById("label");

// Login
function checkInput(username, password) {
    for (let i = 0; i < infor.length; i++) {
        if (infor[i].username===username && infor[i].password === password) {
            return true
        }
    }
    return false
}
function Login() {
    if (username.value === "" || pwd.value === "") {
        username.style.borderColor = "red"
        pwd.style.borderColor = "red"
        label.style.display = "block"
        label.innerHTML = "Vui lòng không bỏ trống tài khoản và mật khẩu"
        return false
    } else if (checkInput(username.value, pwd.value)) {
        label.style.display = "none"
        username.style.borderColor = "green"
        pwd.style.borderColor = "green"
        window.location.href="./Home/homepage.html"
    } else {
        label.innerHTML = "Tài khoản hoặc mật khẩu không đúng"
    }

}

