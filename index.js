let username = document.getElementById("username");
let pwd = document.getElementById("password");
let label = document.getElementById("label");
// Login
function Login() {
    if (username.value === "" || pwd.value === "") {
        username.style.borderColor = "red"
        pwd.style.borderColor = "red"
        label.style.display = "block"
        label.innerHTML = "Vui lòng không bỏ trống tài khoản và mật khẩu"
        return false
    } else if (checkInput(username.value, pwd.value)) {
        alert("Thành công")
        label.style.display = "none"
        username.style.borderColor = "green"
        pwd.style.borderColor = "green"
    } else {
        label.innerHTML = "Tài khoản hoặc mật khẩu không đúng"
    }

}

function checkInput(username, password) {
    infor = (JSON.parse(localStorage.getItem("users")))
    for (let i = 0; i < infor.length; i++) {
        if (checkUser(username) && infor[i].password === password) {
            return true
        }
    }
    return false
}

function checkUser(username) {
    infor = (JSON.parse(localStorage.getItem("users")))
    for (let i = 0; i < infor.length; i++) {
        if (infor[i].username === username) {
            return true
        }
    }
    return false
}

function checkEmail(email) {
    infor = (JSON.parse(localStorage.getItem("users")))
    for (let i = 0; i < infor.length; i++) {
        if (infor[i].email === email) {
            return true
        }
    }
    return false
}


// Register
let confirmPwd = document.getElementById("confirmPassword")
let email = document.getElementById("email")
function register() {
    if (username.value === "" || pwd.value === "" || confirmPwd.value === "" || email === "") {
        username.style.borderColor = "red"
        pwd.style.borderColor = "red"
        confirmPwd.style.borderColor = "red"
        email.style.borderColor = "red"
        label.style.display = "block"
        label.innerHTML = "Vui lòng không bỏ trống "
        return false
    } else if (checkUser(username.value)) {
        label.innerHTML = "Tài khoản đã tồn tại"
        label.style.display = "block"
        return false;

    } else if (checkEmail(email.value)) {
        username.style.borderColor = "green"
        label.innerHTML = "Email đã tồn tại"
        label.style.display = "block"
        return false;
    } else if (pwd.value !== confirmPwd.value) {
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

    }





}

// Forgot Password
function forgotPassword() {
    if (pwd.value === "" || confirmPwd.value === "" || email === "") {
        pwd.style.borderColor = "red"
        confirmPwd.style.borderColor = "red"
        email.style.borderColor = "red"
        label.style.display = "block"
        label.innerHTML = "Vui lòng không bỏ trống "
        return false
    } else if (checkEmail(email.value) === false) {
        label.style.display = "block"
        label.innerHTML = "Email không tồn tại"
        return false
    } else if (pwd.value !== confirmPwd.value) {
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



function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}





