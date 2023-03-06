let apiRead = 'http://3ca6-210-245-20-161.ngrok.io/api/v1/post/'
let main_content = document.getElementById("main_content")
window.onload = onloadHome()
function onloadHome() {

	let ID = localStorage.getItem("Id") - 1
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
			for (let i = 0; i < 3; i++) {
				if (data[i].image_url.length > 0) {
					let name = data[i].user.first_name + " " + data[i].user.last_name;
					main_content.innerHTML += `
				<div class="card" id="card">
					<div class="infor">
						<img class="avatar" src="/assets/avatar.jpg" alt="">
						<span class="name">${name} </span>
						<span class="time"> ᛫ 2d</span>
					</div>		
					<div class="slideshow-container" id="slideshow_container">
						<div class="content-image" id="content_image">				
					`
					let card = document.getElementById("card")
					let slideshow_container = document.getElementById("slideshow_container")
					let content_image = document.getElementById("content_image")



					for (let j = 0; j < data[i].image_url.length; j++) {
						console.log(data[i].image_url[j])
						content_image.innerHTML += `
								<div class="mySlides fade">
									<img class="image-post" src="${data[i].image_url[j]}" width=390px>
								</div>
						`
					}
					content_image.innerHTML += `</div>
							`
					slideshow_container.innerHTML += `
					<a class="prev" onclick="plusSlides(-1)"><img src="/assets/arrow_pre.png" alt=""></a>
					<a class="next" onclick="plusSlides(1)"><img src="/assets/arrow_next.png" alt=""></a>
					<div class="mul" style="text-align:center" id="mul">
					
			
					`
					let mul = document.getElementById("mul")
					for (let j = 0; j < data[i].image_url.length; j++) {
						console.log(data[i].image_url[j])
						let n = j + 1
						mul.innerHTML += `
						
						
						<span class="dot" onclick="currentSlide(${n})"></span>
						`
					}



					card.innerHTML += `		
					
					
						<div>
							<div class="emotion">
								<img onclick="Like()" id="iconLikeActive" src="/assets/iconMenu/Active/Like_White.png"
									alt="">
								<img onclick="Like()" id="iconLikeDefault" src="/assets/iconMenu/Default/Like_White.png"
									alt="">
								<img onclick="Dislike()" id="iconDislikeActive"
									src="/assets/iconMenu/Active/Dislike_White.png" alt="">
								<img onclick="Dislike()" id="iconDislikeDefault"
									src="/assets/iconMenu/Default/Dislike_White.png" alt="">
								 <a id="taga" onclick="popupComment(${data[i].id})" href="#"><img src="/assets/iconMenu/Default/Comment_White.png" alt="#"> </a> 
							</div>
							<div class="group-statistical">
								<div class="statistical">
									<span class="like" id="like"><span id="numberLike"> 99 </span> lượt thích</span>
									<span>᛫</span>
									<span class="dislike" id="dislike"> <span id="numberDislike">107 </span> lượt không
										thích </span>
								</div>
								<p class="status">${data[i].caption}</p>
		
								<p>Comment</p>
								<input type="text" name="" id="" placeholder="Viết bình luận...">
							</div>
						</div>
					
					</div>`
				}

			}


		})




}




function popupComment(data) {
	let taga = document.getElementById("taga")
	taga.href = "#popup1"
	let popupComment = document.getElementById("popup1")
	let api = "http://3ca6-210-245-20-161.ngrok.io/api/v1/post/" + data + "/"
	fetch(api, {
		method: "GET",
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Token ' + localStorage.getItem('Token')
		}

	}).then((res) => {
		if (res.status === 200)
			return res.json()
	}).then((data) => {
		let fullname = data.user.last_name + " " + data.user.first_name
		// let img=data.image_url

		popupComment.innerHTML = `<div class="popup">
		<div class="avatar-temp">
			<div class="infor">
				<img src="/assets/avatar.jpg" alt="">
				<span>${fullname}</span>
			</div>
		</div>
		<div class="left-comment">
			<img src="https://thumbsnap.com/i/3ytZgF9F.jpg">
		</div>
		<div class="right-comment">
			<div class="infor">
				<img src="/assets/avatar.jpg" alt="">
				<span>${fullname}</span>
			</div>
			<div class="group-comment">
				<div class="comment">
					<div class="infor">
						<img src="/assets/avatar.jpg" alt="" width="100px">
					</div>
					<div class="infor-comment">
						<div class="main-comment">
							<span class="name">Cao Thành Tài</span>
							<span class="comment"> comment</span>
						</div>
						<p class="time">12h</p>

					</div>

				</div>

				<div class="comment">
					<div class="infor">
						<img src="/assets/avatar.jpg" alt="" width="100px">
					</div>
					<div class="infor-comment">
						<div class="main-comment">
							<span class="name">Cao Thành Tài</span>
							<span class="comment"> comment</span>
						</div>
						<p class="time">12h</p>

					</div>

				</div>
				<div class="comment">
					<div class="infor">
						<img src="/assets/avatar.jpg" alt="" width="100px">
					</div>
					<div class="infor-comment">
						<div class="main-comment">
							<span class="name">Cao Thành Tài</span>
							<span class="comment"> comment</span>
						</div>
						<p class="time">12h</p>

					</div>

				</div>
				<div class="comment">
					<div class="infor">
						<img src="/assets/avatar.jpg" alt="" width="100px">
					</div>
					<div class="infor-comment">
						<div class="main-comment">
							<span class="name">Cao Thành Tài</span>
							<span class="comment"> comment</span>
						</div>
						<p class="time">12h</p>

					</div>

				</div>
				<div class="comment">
					<div class="infor">
						<img src="/assets/avatar.jpg" alt="" width="100px">
					</div>
					<div class="infor-comment">
						<div class="main-comment">
							<span class="name">Cao Thành Tài</span>
							<span class="comment"> comment</span>
						</div>
						<p class="time">12h</p>

					</div>

				</div>
				<div class="comment">
					<div class="infor">
						<img src="/assets/avatar.jpg" alt="" width="100px">
					</div>
					<div class="infor-comment">
						<div class="main-comment">
							<span class="name">Cao Thành Tài</span>
							<span class="comment"> comment</span>
						</div>
						<p class="time">12h</p>

					</div>

				</div>

				<div class="comment">
					<div class="infor">
						<img src="/assets/avatar.jpg" alt="" width="100px">
					</div>
					<div class="infor-comment">
						<div class="main-comment">
							<span class="name">Cao Thành Tài</span>
							<span class="comment"> comment</span>
						</div>
						<p class="time">12h</p>

					</div>

				</div>


			</div>
			<div class="emotion">
				<img onclick="Like()" id="iconLikeActive" src="/assets/iconMenu/Active/Like_Black.png" alt="">
				<img onclick="Like()" id="iconLikeDefault" src="/assets/iconMenu/Default/Like_Black.png" alt="">
				<img onclick="Dislike()" id="iconDislikeActive" src="/assets/iconMenu/Active/Dislike_Black.png"
					alt="">
				<img onclick="Dislike()" id="iconDislikeDefault" src="/assets/iconMenu/Default/Dislike_Black.png"
					alt="">
				<img src="/assets/iconMenu/Default/Comment_Black.png" alt="">
			</div>

			<div class="statistical">
				<span class="like" id="like"><span id="numberLike"> 99 </span> lượt thích</span>
				<span>᛫</span>
				<span class="dislike" id="dislike"> <span id="numberDislike">107 </span> lượt không
					thích </span>
			</div>
			<div>
				<input type="text" name="" id="" placeholder="Viết bình luận...">
			</div>

		</div>




	</div>
	<div>
		<a class="close" href="#">&times;</a>
	</div>
	a.href="popup1"
`
	})


}




let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	if (n > slides.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = slides.length }
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}




var isAdvancedUpload = function () {
	var div = document.createElement('div');
	return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
}();

let draggableFileArea = document.querySelector(".drag-file-area");
let browseFileText = document.querySelector(".browse-files");
let uploadIcon = document.querySelector(".upload-icon");
let dragDropText = document.querySelector(".dynamic-message");
let fileInput = document.querySelector(".default-file-input");
let cannotUploadMessage = document.querySelector(".cannot-upload-message");
let cancelAlertButton = document.querySelector(".cancel-alert-button");
let uploadedFile = document.querySelector(".file-block");
let fileName = document.querySelector(".file-name");
let fileSize = document.querySelector(".file-size");
let progressBar = document.querySelector(".progress-bar");
let removeFileButton = document.querySelector(".remove-file-icon");
let uploadButton = document.querySelector(".upload-button");
let fileFlag = 0;

fileInput.addEventListener("click", () => {
	fileInput.value = '';
	console.log(fileInput.value);
});

fileInput.addEventListener("change", e => {
	console.log(" > " + fileInput.value)
	uploadIcon.innerHTML = 'check_circle';
	dragDropText.innerHTML = 'File Dropped Successfully!';
	document.querySelector(".label").innerHTML = `drag & drop or <span class="browse-files"> <input type="file" class="default-file-input" style=""/> <span class="browse-files-text" style="top: 0;"> browse file</span></span>`;
	uploadButton.innerHTML = `Upload`;
	fileName.innerHTML = fileInput.files[0].name;
	fileSize.innerHTML = (fileInput.files[0].size / 1024).toFixed(1) + " KB";
	uploadedFile.style.cssText = "display: flex;";
	progressBar.style.width = 0;
	fileFlag = 0;
});

uploadButton.addEventListener("click", () => {
	let isFileUploaded = fileInput.value;
	if(isFileUploaded != '') {
		if (fileFlag == 0) {
    		fileFlag = 1;
    		var width = 0;
    		var id = setInterval(frame, 50);
    		function frame() {
      			if (width >= 390) {
        			clearInterval(id);
					uploadButton.innerHTML = `<span class="material-icons-outlined upload-button-icon"> check_circle </span> Uploaded`;
      			} else {
        			width += 5;
        			progressBar.style.width = width + "px";
      			}
    		}
  		}
	} else {
		cannotUploadMessage.style.cssText = "display: flex; animation: fadeIn linear 1.5s;";
	}
});

cancelAlertButton.addEventListener("click", () => {
	cannotUploadMessage.style.cssText = "display: none;";
});

if(isAdvancedUpload) {
	["drag", "dragstart", "dragend", "dragover", "dragenter", "dragleave", "drop"].forEach( evt => 
		draggableFileArea.addEventListener(evt, e => {
			e.preventDefault();
			e.stopPropagation();
		})
	);

	["dragover", "dragenter"].forEach( evt => {
		draggableFileArea.addEventListener(evt, e => {
			e.preventDefault();
			e.stopPropagation();
			uploadIcon.innerHTML = 'file_download';
			dragDropText.innerHTML = 'Drop your file here!';
		});
	});

	draggableFileArea.addEventListener("drop", e => {
		uploadIcon.innerHTML = 'check_circle';
		dragDropText.innerHTML = 'File Dropped Successfully!';
		document.querySelector(".label").innerHTML = `drag & drop or <span class="browse-files"> <input type="file" class="default-file-input" style=""/> <span class="browse-files-text" style="top: -23px; left: -20px;"> browse file</span> </span>`;
		uploadButton.innerHTML = `Upload`;

		let files = e.dataTransfer.files;
		fileInput.files = files;
		console.log(files[0].name + " " + files[0].size);
		console.log(document.querySelector(".default-file-input").value);
		fileName.innerHTML = files[0].name;
		fileSize.innerHTML = (files[0].size/1024).toFixed(1) + " KB";
		uploadedFile.style.cssText = "display: flex;";
		progressBar.style.width = 0;
		fileFlag = 0;
	});
}

removeFileButton.addEventListener("click", () => {
	uploadedFile.style.cssText = "display: none;";
	fileInput.value = '';
	uploadIcon.innerHTML = 'file_upload';
	dragDropText.innerHTML = 'Drag & drop any file here';
	document.querySelector(".label").innerHTML = `or <span class="browse-files"> <input type="file" class="default-file-input"/> <span class="browse-files-text">browse file</span> <span>from device</span> </span>`;
	uploadButton.innerHTML = `Upload`;
});




function Like() {
	let iconLikeDefault = document.getElementById("iconLikeDefault")
	let iconDislikeDefault = document.getElementById("iconDislikeDefault")
	let iconLikeActive = document.getElementById("iconLikeActive")
	let iconDislikeActive = document.getElementById("iconDislikeActive")
	let numberLike = document.getElementById("numberLike")
	let numberDislike = document.getElementById("numberDislike")
	if (iconLikeDefault.style.display !== "none") {
		iconLikeDefault.style.display = "none";
		iconLikeActive.style.display = "inline";

		numberLike.innerHTML = eval(numberLike.innerHTML + "+1")

	} else {
		iconLikeDefault.style.display = "inline";
		iconLikeActive.style.display = "none";
		numberLike.innerHTML = eval(numberLike.innerHTML + "-1")
	}


}


function Dislike() {
	if (iconDislikeDefault.style.display !== "none") {
		iconDislikeDefault.style.display = "none";
		iconDislikeActive.style.display = "inline";
		numberDislike.innerHTML = eval(numberDislike.innerHTML + "+1")

	} else {
		iconDislikeDefault.style.display = "inline";
		iconDislikeActive.style.display = "none";
		numberDislike.innerHTML = eval(numberDislike.innerHTML + "-1")
	}


}

