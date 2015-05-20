var videos=[
	{   poster:"https://s3-sa-east-1.amazonaws.com/cannedhead.canned/img/1.png",
		mp4:"https://s3.amazonaws.com/cannedhead.temp/videos/1.mp4",
		ogg:"https://s3.amazonaws.com/cannedhead.temp/videos/1.ogv",
		webm:"https://s3.amazonaws.com/cannedhead.temp/videos/1.webm" },
	{   poster:"https://s3-sa-east-1.amazonaws.com/cannedhead.canned/img/2.png",
		mp4:"https://s3.amazonaws.com/cannedhead.temp/videos/2.mp4",
		ogg:"https://s3.amazonaws.com/cannedhead.temp/videos/2.ogv",
		webm:"https://s3.amazonaws.com/cannedhead.temp/videos/2.webm" },
	{   poster:"https://s3-sa-east-1.amazonaws.com/cannedhead.canned/img/3.png",
		mp4:"https://s3.amazonaws.com/cannedhead.temp/videos/3.mp4",
		ogg:"https://s3.amazonaws.com/cannedhead.temp/videos/3.ogv",
		webm:"https://s3.amazonaws.com/cannedhead.temp/videos/3.webm" },
	{   poster:"https://s3-sa-east-1.amazonaws.com/cannedhead.canned/img/4.png",
		mp4:"https://s3.amazonaws.com/cannedhead.temp/videos/4.mp4",
		ogg:"https://s3.amazonaws.com/cannedhead.temp/videos/4.ogv",
		webm:"https://s3.amazonaws.com/cannedhead.temp/videos/4.webm" },
	{   poster:"https://s3-sa-east-1.amazonaws.com/cannedhead.canned/img/5.png",
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
		$("#video-container").prepend('<video id="video'+i+'" class="widthFix" preload="metadata" poster="'+video.poster+'" style="z-index='+(-1-i)+'">'+
			'<source src="'+video.mp4+'"  type="video/mp4">'+
			'<source src="'+video.ogg+'"  type="video/ogg">'+
			'<source src="'+video.webm+'" type="video/webm">'+
		'</video>');
	}

	/*
		document.getElementById('video0').play();			

		setTimeout(function(){		
			document.getElementById('video1').play();	
			$("#video1").css("opacity",0).delay(100).animate({opacity:1},400);	
			$("#video0").css("opacity",1).delay(100).animate({opacity:0},800);				
		},4000);	
		

		setTimeout(function(){		
			document.getElementById('video2').play();	
			//$("#video2").css("opacity",0).delay(100).animate({opacity:1},400);	
			$("#video1").css("opacity",1).delay(100).animate({opacity:0},800);	
			
		},6000);

		
		setTimeout(function(){
			document.getElementById('video3').play();
			//$("#video2").css("opacity",0).delay(100).animate({opacity:0},400).css("zIndex",-2).animate({zIndex:-1},200);
			$("#video2").css("opacity",1).delay(100).animate({opacity:0},800);		
		},9000);

		setTimeout(function(){
			document.getElementById('video4').play();
			//$("#video2").css("opacity",0).delay(100).animate({opacity:0},400).css("zIndex",-2).animate({zIndex:-1},200);
			$("#video3").css("opacity",1).delay(100).animate({opacity:0},800);		
		},12000);

		setTimeout(function(){
			document.getElementById('video0').play();
			$("#video0").css("opacity",0).delay(100).animate({opacity:1},400);
			$("#video4").css("opacity",1).delay(100).animate({opacity:0},800);		
		},17000);
	*/

	var i = 0;
	var delay=2960;
	window.setInterval(function(){

		var video = document.getElementById('video'+i);
		
		video.play();

		var delay=video.duration*1000-2000;		

		console.log('playing '+i+' for '+delay);

		setTimeout(function(){  

			if(i == videos.length-1){							
				$("#video0").css("opacity",0).delay(100).animate({opacity:1},400);	
				$("#video"+i).css("opacity",1).delay(100).animate({opacity:0},800);		
				i=0;
				console.log('i=0');
			} else {			
				$("#video"+(i+1)).css("opacity",0).delay(100).animate({opacity:1},400);	
				$("#video"+i).css("opacity",1).delay(100).animate({opacity:0},800);	
				i=i+1;
				console.log('i++');
			}		

		
		},delay); 

	},4000);	// repeat forever, polling every 3 seconds
}





