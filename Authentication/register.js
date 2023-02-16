let confirmPwd = document.getElementById("confirmPassword")
let email = document.getElementById("email")
let username = document.getElementById("username");
let pwd = document.getElementById("password");
let label = document.getElementById("label");
let api = "http://3ca6-210-245-20-161.ngrok.io/register/"
let loading=document.getElementById("popupLoading")
function ValidateEmail() {

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        console.log("dung")
        return true
    }


    else {
        console.log("sai")
        return false
    }


}



function check() {
    let Infor = {
        "username": username.value,
        "email": email.value,
        "password": pwd.value
    }
    checkPassword = checkSamePassword(confirmPwd.value, pwd.value)
    if (ValidateEmail() === false) {

        label.innerHTML = "Email không đúng"
        label.style.display = "block"
        return false
    }
    if (checkPassword) {

        fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Infor)
        })
            .then((res) => {
                if (res.status === 200) {
                    loading.style.opacity = '1';
                    loading.style.visibility = "visible"
                    setTimeout(function () { window.location.href = "/index.html" }, 3000)
                    return res.json()
                } else if (res.status !== 200) {
                    label.innerHTML = "Tài khoản đã tồn tại"
                    label.style.display = "block"
                    return false
                }
            })

            .then((data) => {

                localStorage.setItem("Token", data.token)
            })

    } else {

        pwd.style.borderColor = "red"
        confirmPwd.style.borderColor = "red"
        label.style.display = "block"
        label.innerHTML = "Mật khẩu không giống nhau"
        return false

    }
}












function checkRegisterr() {

    let a = fetch(api).then((response) => response.json())
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
    check()

}




