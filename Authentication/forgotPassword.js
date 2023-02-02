let confirmPwd = document.getElementById("confirmPassword")
let email = document.getElementById("email")
let pwd = document.getElementById("password");
let label = document.getElementById("label");
function forgotPassword() {
   let valueEmail=checkEmail(email.value)
   let valuePwd=checkSamePassword(pwd.value,confirmPwd.value)
    if (pwd.value === "" || confirmPwd.value === "" || email === "") {
        pwd.style.borderColor = "red"
        confirmPwd.style.borderColor = "red"
        email.style.borderColor = "red"
        label.style.display = "block"
        label.innerHTML = "Vui lòng không bỏ trống "
        return false
    } else if (!valueEmail) {
        label.style.display = "block"
        label.innerHTML = "Email không tồn tại"
        return false
    } else if (!valuePwd) {
        email.style.borderColor = "green"
        pwd.style.borderColor = "red"
        confirmPwd.style.borderColor = "red"
        label.style.display = "block"
        label.innerHTML = "Mật khẩu không giống nhau"
        return false
    } else {
        email.style.borderColor = "green"
        pwd.style.borderColor = "green"
        confirmPwd.style.borderColor = "green"
        label.style.display = "none"

        infor = (JSON.parse(localStorage.getItem("users")))
        for (let i = 0; i < infor.length; i++) {
            if (infor[i].email ===email.value) {
                infor[i].password = pwd.value;
            }
        }
        localStorage.setItem("users", JSON.stringify(infor))
    }
}
