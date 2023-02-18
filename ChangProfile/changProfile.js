let fullname = document.getElementById("name")
let firstname = document.getElementById("firstname")
let lastname = document.getElementById("lastname")
let sdt = document.getElementById("sdt")
let email = document.getElementById("email")
let bio = document.getElementById("bio")
let apiRead = "http://3ca6-210-245-20-161.ngrok.io/api/v1/users/"
let apiPut = "http://3ca6-210-245-20-161.ngrok.io/api/v1/users/{id}/"
let loading = document.getElementById("popupLoading")
let id = localStorage.getItem("Id")

window.onload=OnloadChangProfile()

function OnloadChangProfile() {
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
            console.log( data  )
            fullname.innerHTML=data.last_name+" "+data.first_name
            firstname.value=data.first_name
            lastname.value=data.last_name
            bio.value=data.bio

        })
}

function changeProfile(){
    
    
    let changeInfor={
        'id': id,
        'first_name':firstname.value,
        'last_name':lastname.value,
        'bio':bio.value
    }
   
    fetch("http://3ca6-210-245-20-161.ngrok.io/api/v1/users/"+id+"/", {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorage.getItem('Token')
        },
        body:JSON.stringify(changeInfor)


    }).then((res) =>{
        
            window.location.href="/Profile/profile.html"
            return res
      
    })
}