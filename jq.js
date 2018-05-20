$(document).ready(()=>{

	$('#para').hide();
	$('#one').click(()=>{
	$('#para').toggle();
})
	
$('#mybtn').click(()=>{
$('.cover').fadeIn('fast');
$('.mymodal').fadeIn('fast');	
})
$('.mymodal').click(()=>{
if($(event.target).is('.close')){
	$('.cover').fadeOut('fast');
$('.mymodal').fadeOut('fast');	
}
})
})    

/*

$('#mybtn').click(()=>{
		$('#mymodal').toggle();
		$('mymodal').focus(()=>{
          $(body).css("color","black");
		})
		
		$('#close').toggle();
	})
*/