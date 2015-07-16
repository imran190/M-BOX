$(function(){
document.body.innerHTML += '<div id="mboxpopcotent"></div>'; 
$(".mbox").click(function() {					  
var url = ($(this).attr('href'));
var frameurl = ($(this).attr('frameurl'));
var frametitle = ($(this).attr('frametitle'));
var framewidth = ($(this).attr('framewidth'));
var frameheight = ($(this).attr('frameheight'));

 
if(typeof frametitle === 'undefined'){

$('#mboxpopcotent').html('<div class="mboxblackbg"></div><div  class="mboxwrap"><div  class="mboxwhitebox"><div  class="mboxtitlehead2"><img src="images/mboxclose.png" width="32" height="32" class="mboxclosebtn" onClick="closediv();"></div><div  class="mboxcontentbox" style="height:'+contentheight+'px;"><iframe frameborder="0" class="mboxframe" src="'+frameurl+'"></iframe></div></div></div>');
} else {
var contentheight = frameheight-36;	
$('#mboxpopcotent').html('<div class="mboxblackbg"></div><div  class="mboxwrap"><div  class="mboxwhitebox"><div  class="mboxtitlehead">'+frametitle+'<img src="images/mboxclose.png" width="32" height="32" class="mboxclosebtn" onClick="closediv();"></div><div  class="mboxcontentbox" style="height:'+contentheight+'px;"><iframe frameborder="0" class="mboxframe" src="'+frameurl+'"></iframe></div></div></div>');
}


$(".mboxwhitebox").animate({width:framewidth+"px"},400);
$(".mboxwhitebox").animate({height:frameheight+"px"},400);

}); }); 
function closediv(){
$('.mboxblackbg').remove();	
$('.mboxwrap').remove();
 
}
