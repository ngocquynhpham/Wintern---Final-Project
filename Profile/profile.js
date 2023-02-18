let fullname=document.getElementById('fullname')
let bio=document.getElementById('bio')
let apiRead = "http://3ca6-210-245-20-161.ngrok.io/api/v1/users/"
let avatar=document.getElementById('Avatar')
window.onload=onloadProfile()
function onloadProfile(){
        avatar.src="/assets/co.png"
        let ID = localStorage.getItem("Id") -1
        fetch(apiRead, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + localStorage.getItem('Token')
            },
    
    
        }).then((res) => {
            if (res.status === 200)
                return res.json()
        })
    
            .then((data) => {
                data=data[ID]
                fullname.innerHTML=data.last_name+" "+data.first_name
                bio.innerHTML=data.bio
            })
    
}