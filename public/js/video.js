var videos=[
	{   poster:"https://s3.amazonaws.com/cannedhead.temp/img/1.png",
		mp4:"https://s3.amazonaws.com/cannedhead.temp/videos/1.mp4",
		ogg:"https://s3.amazonaws.com/cannedhead.temp/videos/1.ogv",
		webm:"https://s3.amazonaws.com/cannedhead.temp/videos/1.webm" },
	{   poster:"https://s3.amazonaws.com/cannedhead.temp/img/2.png",
		mp4:"https://s3.amazonaws.com/cannedhead.temp/videos/2.mp4",
		ogg:"https://s3.amazonaws.com/cannedhead.temp/videos/2.ogv",
		webm:"https://s3.amazonaws.com/cannedhead.temp/videos/2.webm" },
	{   poster:"https://s3.amazonaws.com/cannedhead.temp/img/3.png",
		mp4:"https://s3.amazonaws.com/cannedhead.temp/videos/3.mp4",
		ogg:"https://s3.amazonaws.com/cannedhead.temp/videos/3.ogv",
		webm:"https://s3.amazonaws.com/cannedhead.temp/videos/3.webm" },
	{   poster:"https://s3.amazonaws.com/cannedhead.temp/img/4.png",
		mp4:"https://s3.amazonaws.com/cannedhead.temp/videos/4.mp4",
		ogg:"https://s3.amazonaws.com/cannedhead.temp/videos/4.ogv",
		webm:"https://s3.amazonaws.com/cannedhead.temp/videos/4.webm" },
	{   poster:"https://s3.amazonaws.com/cannedhead.temp/img/5.png",
		mp4:"https://s3.amazonaws.com/cannedhead.temp/videos/5.mp4",
		ogg:"https://s3.amazonaws.com/cannedhead.temp/videos/5.ogv",
		webm:"https://s3.amazonaws.com/cannedhead.temp/videos/5.webm" }
];

var delay = 3500; //5 Seconds delay
var firstVideo = true; //Who's first?

$(document).ready(function(){

	loadVideos();
	//loopVideos();
   
 });

function sizeVideo(e){
  if(typeof e=="undefined"){
      e=getDocumentRatio()
  }
  if(e<9/16){
      $("video").removeClass("heightFix").addClass("widthFix");
      $("#image").removeClass("heightFix").addClass("widthFix")
  } else {
      $("video").removeClass("widthFix").addClass("heightFix");
      $("#image").removeClass("widthFix").addClass("heightFix");
  }
}

document.body.style.backgroundImage="none";

var wh=$(window).height();
var ww=$(window).width();
var ratio=wh/ww;
sizeVideo(ratio);

window.onresize=function(){
  var e=$(window).height();
  var t=$(window).width();
  var n=e/t;
  sizeVideo(n);
}  

function loadVideos(){


	for (i = 0; i < videos.length; i++) { 
		var video = videos[i];	
		$("#video-container").prepend('<video id="video'+i+'" class="widthFix" preload="metadata" poster="'+video.poster+' style="z-index='+(-1-i)+'">'+
			'<source src="'+video.mp4+'"  type="video/mp4">'+
			'<source src="'+video.ogg+'"  type="video/ogg">'+
			'<source src="'+video.webm+'" type="video/webm">'+
		'</video>');
	}

		document.getElementById('video0').play();	
		
		setTimeout(function(){		
			document.getElementById('video1').play();	
			//$("#video1").css("opacity",0).delay(100).animate({opacity:1},400).css("zIndex",-2).animate({zIndex:-1},200);	
			$("#video0").css("opacity",1).delay(100).animate({opacity:0},800);				
		},4500);

		
		

		setTimeout(function(){		
			document.getElementById('video2').play();	
			//$("#video1").css("opacity",0).delay(100).animate({opacity:1},400).css("zIndex",-2).animate({zIndex:-1},200);	
			$("#video1").css("opacity",1).delay(100).animate({opacity:0},800);	
			
		},7500);

		
		setTimeout(function(){
			document.getElementById('video3').play();
			//$("#video2").css("opacity",0).delay(100).animate({opacity:0},400).css("zIndex",-2).animate({zIndex:-1},200);
			$("#video2").css("opacity",1).delay(100).animate({opacity:0},800);		
		},10000);
		
}

//loop entre videos
function loopVideos(){
	for (i = 0; i < videos.length; i++) { 	
		playVideo(i);		
		
		if(i == videos.length-1){
			i=0;
		}

	}
}

// Pasa id del video, lo reproduce y desaparece el anterior
function playVideo(videoid){
	
	if(videoid == videos.length-1){
		setTimeout(function(){		
			document.getElementById('video0').play();	
				//$("#video1").css("opacity",0).delay(100).animate({opacity:1},400).css("zIndex",-2).animate({zIndex:-1},200);	
			$("#video"+(videos.length-1)).css("opacity",1).delay(100).animate({opacity:0},800);				
		},4500);		
	} else {
		setTimeout(function(){		
			document.getElementById('video'+videoid).play();	
				//$("#video1").css("opacity",0).delay(100).animate({opacity:1},400).css("zIndex",-2).animate({zIndex:-1},200);	
			$("#video"+(videoid-1)).css("opacity",1).delay(100).animate({opacity:0},800);				
		},4500);
	}

}



