let confirmPwd = document.getElementById("confirmPassword")
let email = document.getElementById("email")
let username = document.getElementById("username");
let pwd = document.getElementById("password");
let label = document.getElementById("label");




function register() {

    let valuePwd = checkSamePassword(pwd.value, confirmPwd.value);

    let valueEmail = checkEmail(email.value);

    let valueUsername = checkUsername(username.value);

    if (pwd.value === '' || confirmPwd.value === "" || email.value === "" || username.value === "") {
        username.style.borderColor = "red"
        pwd.style.borderColor = "red"
        confirmPwd.style.borderColor = "red"
        email.style.borderColor = "red"
        label.style.display = "block"
        label.innerHTML = "Vui lòng không bỏ trống "
        return false
    } else {
        if (valuePwd && !valueEmail && !valueUsername) {
            pwd.style.borderColor = "green"
            confirmPwd.style.borderColor = "green"
            username.style.borderColor = "green"
            email.style.borderColor = "green"
            label.style.display = "none"
            q = uuidv4();
            let users = {
                username: username.value,
                password: password.value,
                email: email.value,
                userID: q

            }
            let list_users = JSON.parse(localStorage.getItem("users"));
            list_users.push(users)
            localStorage.setItem("users", JSON.stringify(list_users))
            window.location.href="/Home/homepage.html"

        } else if (valueUsername) {
            label.innerHTML = "Tài khoản đã tồn tại"
            label.style.display = "block"
            return false;
         
        } else if (valueEmail) {
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
        }
    }


}



