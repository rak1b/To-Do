$('ul').on('click','li',function(){
	$(this).toggleClass('work_done')
})

$('ul').on('click','span',function(){
	// $(this).parent().remove();
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});

	event.stopPropagation();

})

$('input').keypress(function(){
	if (event.keyCode===13) {
		var todotext = $(this).val()
		$(this).val('');
		$('ul').append('<li><span><i class="fa fa-trash" ></i></span>' +todotext + '</li>')
	}
			
})

// console.log($('h1').css('backgroundColor'))
$('.fa-plus').on('click',function(){
	$('input').fadeToggle();
})


