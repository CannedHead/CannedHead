function sizeVideo(e){
	if(typeof e=="undefined"){
		e=getDocumentRatio()
	}
	if(e<9/16){
		console.log("width : 100%");
		$("video").removeClass("heightFix").addClass("widthFix");
		$("#image").removeClass("heightFix").addClass("widthFix");
	}else{
		console.log("heigth  : 100%");
		$("video").removeClass("widthFix").addClass("heightFix");
		$("#image").removeClass("widthFix").addClass("heightFix");
	}
}

document.body.style.backgroundImage="none";
var wh=$(window).height();
var ww=$(window).width();
var ratio=wh/ww;sizeVideo(ratio);

window.onresize=function(){
	var e=$(window).height();
	var t=$(window).width();
	var n=e/t;sizeVideo(n)
}             
        
