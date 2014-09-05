var input=document.getElementsByTagName("input");
input.addEventListener('change', imageToBase64, false);

function imageToBase64(e,callback,outputFormat){
	var canvas = document.createElement('CANVAS'),
		ctx = canvas.getContext('2d'),
		reader = new FileReader();
	reader.onload = function(event){
		var img = new Image();
		img.onload = function(){
			canvas.width = img.width;
			canvas.height = img.height;
			ctx.drawImage(img,0,0);
			var dataURL = canvas.toDataURL(outputFormat);
			callback.call(this, dataURL);
			canvas = null; 
		}
		img.src = event.target.result;
	}
	reader.readAsDataURL(e.target.files[0]);     
}
