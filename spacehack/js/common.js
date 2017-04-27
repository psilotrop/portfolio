
$(function() {

	$('.fancybox').fancybox();

	$("input[type='tel']").mask("+38 (099) 999-99-99");

	$('#menu li a, .scrollTo').click(function(event) {
		event.preventDefault();
		var target = $(this).attr('href');
		$.scrollTo($(target), 1000);
	});

	$('.main .next').click(function(event) {
		event.preventDefault();
		$.scrollTo($('#format'), 800);
	});

	$('.main .butt').click(function(event) {
		$(this).next('#menu').slideToggle();
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(event) {
		event.preventDefault();
		var form = $(this);
		var correct = true;
		form.find('input:not([type="hidden"])').each(function(index, el) {
			if ($(this).val() == '' && correct) {
				correct = false;
				$(this).focus();
			}
		});
		if (correct) {
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: form.serialize()
			}).done(function() {
				form.find('input:not([type="hidden"])').val('');
				$.fancybox($('#thanks'));
				setTimeout(function() {
					$.fancybox.close();
				}, 3000);
			});
		}
	});
});
