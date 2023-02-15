



function checkUsername(username) {
   
    for (let i = 0; i < infor.length; i++) {
        if (infor[i].username === username) {
            return true
        }
    }
    return false
}


function checkEmail(email) {
    
    for (let i = 0; i < infor.length; i++) {
        if (infor[i].email === email) {
            return true
        }
    }
    return false
}

function checkSamePassword(pwd1,pwd2){
    if(pwd1===pwd2){
        return true;
    }
    return false;
}

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

