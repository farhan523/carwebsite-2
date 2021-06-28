// let change =  document.getElementById('biki')

// var btndisable = document.querySelector('#buttondisable')
// // btndisable.style.display = "block"

// change.addEventListener('change',()=>{previewFile()})

// 	var n = 0
// 	var array = []
// function previewFile(){

 	var preview33 = document.getElementById('biki2');

	// var filez = document.querySelector('input[type=file]')
// 	 var file2 = document.querySelector('input[type=file]').files
// 	 console.log(Object.values(file2))

// 	var reader = new FileReader()
// 	 reader.onloadend = function(){
	 	
// 	 	array[n] = reader.result
// 	 	console.log(reader.result)
// 	 	preview.src = array[0];
	 	 
// 	 	 display(n)

// 	 	 if(n >= 3){
// 	 	 	btndisable.style.display = "none"

// 	 	 }else{
// 	 	 	btndisable.style.display = "block"
// 	 	 }

// 	 	  ++n
// 	 	   console.log(n)
// 	 }

// 	console.log( document.querySelector('input[type=file]').files)
	
// 	 if (file) {
//        reader.readAsDataURL(file); //reads the data as a URL
//    } else {
//        preview.src = "";
//    }

   



	
// }


// function display(n){
// 	var img1 = document.getElementById(`${n}`);
// 	img1.src = array[n]
// 	console.log(n)
// 	console.log(array)
// 	// var img2 = document.getElementById('2');
// 	// var img3 = document.getElementById('3');
// 	// var img4 = document.getElementById('4');

// }

// let cv = document.querySelectorAll('.del')

// cv.forEach((item)=>{
// 	item.addEventListener('click',(e)=>{
// 	let num = e.target.classList
// 	num = parseInt(num[2])
	
	
// 	console.log(array)

// 	array.splice(num,1)
// 	console.log(array)
// 	var img1 = document.getElementById(`${num}`);
// 	img1.src = ""
// 	n--
// 	console.log(n)
// 	if(n <= 3){
// 	 	 	btndisable.style.display = "block"
// 	 	 }

// 	for(var i=0;i<=array.length;i++){
// 		var img1 = document.getElementById(`${i}`);
// 		img1.src = array[i]

// 		console.log(array)
// 	}
// 	var preview = document.getElementById('biki2');
// 	preview.src = array[0]
// })
// })

// var img1 = document.querySelector('.0');
	
	// console.log(img1)


// image previewer 2
var f = 0
var t = 0
document.querySelector('#biki').addEventListener("change", previewImages);

function previewImages() {

  var preview = document.querySelector('#gallery');
  if(f == 1){
  			// detletePrevious(preview);
  			preview.innerHTML = ""
  			t--
  			console.log(t)
  		}

  		t++
  if (this.files) {
    [].forEach.call(this.files, readAndPreview);
    console.log(this.files)
  }

  function readAndPreview(file) {
  		
    // Make sure `file.name` matches our extensions criteria
    if (!/\.(jpe?g|png|gif)$/i.test(file.name)) {
      return alert(file.name + " is not an image");
    } // else...
    
    var reader = new FileReader();
    
    reader.addEventListener("load", function() {
      // var image = new Image();
      // image.height = 100;
      // image.title  = file.name;
      // image.src    = this.result;

      // creating element 
      // console.log(filez)
        		if(f == 0){
  			preview33.src = this.result
  			f++
  			console.log(true)
  		}
      var div1 = document.createElement("div");
      		div1.classList.add('col-sm-3')
          div1.classList.add('col-6')
          div1.classList.add('col-6')
      		div1.classList.add('col-xs-6')
      var div2 = document.createElement("div")
      		div2.classList.add('first')
      // var div3 = document.createElement('div')
      		// div3.classList.add('del2')
      		// div3.classList.add('del')
      		// div3.innerText = "x"
      		  var image = new Image();
      		  image.height = 100
      		  image.style.width = '100%'
      		  image.src = this.result;

      		  div2.appendChild(image)
      		  // div2.appendChild(div3)
      		  div1.appendChild(div2)

      preview.appendChild(div1);
      setPic()

      // setEvent()
    });
    
    reader.readAsDataURL(file);

    
    
  }

}


// function setEvent(){
// 	var zzz = document.querySelectorAll('.del')

// 	zzz.forEach((item)=>{

// 			item.addEventListener('click',(e)=>{
// 				e.target.parentNode.parentNode.remove()
// 				// setPic()
// 			})
// 	})
// }

 var preview2 = document.querySelector('#gallery');
function setPic(){

	if(preview2.firstElementChild === null){
		preview33.src = 'https://p1.pxfuel.com/preview/805/419/635/background-grain-light-colors-texture-royalty-free-thumbnail.jpg'
	}else{
	 	 var ii = preview2.firstElementChild.firstElementChild.firstElementChild.src
	 	 preview33.src = ii
	 }
		
		
		console.log(preview2.firstElementChild)
}

// function deletePrevious(param){
//         param.innerHTML = "";
// }

