window.onload = function(){
	var box = document.getElementById('box');
	var img = box.getElementsByTagName('img');
	var imgArr = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg'];
	var num = 0;
	var keyCode = null;
	var onOff = false;
	
//	初始化图片
	img[0].src = imgArr[0];
	img[1].src = imgArr[1];
	document.onkeydown = function(e){
		e.preventDefault();
		if(onOff) return;
		onOff = true;
		keyCode = e.which;
		clearInterval(img[0].left);
		clearInterval(img[0].top);
		switch(keyCode){
			case 37:
				mTween(img[0],'left',-500,500,'linear',function(){
					change();
					img[0].style.left = 0 + 'px';
				})
				break;
			case 38:
				mTween(img[0],'top',-400,500,'linear',function(){
					change();
					img[0].style.top = 0 + 'px';
				})
				break;
			case 39:
				mTween(img[0],'left',500,500,'linear',function(){
					change();
					img[0].style.left = 0 + 'px';
				})
				break;
			case 40:
				mTween(img[0],'top',400,500,'linear',function(){
					change();
					img[0].style.top = 0 + 'px';
				})
				break;
			}
	}
	document.onkeyup = function(){
		keyCode = 0;
	}
	function change(){
		num++;
		img[0].src = imgArr[num%imgArr.length];
		if(imgArr[num%imgArr.length + 1] == undefined){
			img[1].src = imgArr[0];
		}else{
			img[1].src = imgArr[num%imgArr.length + 1]
		}
		onOff = false;
	}
}
