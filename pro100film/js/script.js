      //Функции портфолио//

		//Вызывает функцию при наведении
	$('#panelWeb').mouseenter(
		function(){
			hideText();
		})
	$("#panelWeb").mouseleave(
        function(){ 
              showText(); 
               });
	$('#panelVer').mouseenter(
		function(){
			hideText();
		})
	$("#panelVer").mouseleave(
        function(){ 
              showText(); 
               });
	$('#panelKon').mouseenter(
		function(){
			hideText();
		})
	$("#panelKon").mouseleave(
        function(){ 
              showText(); 
               });
 		//Скрывает текст
 	function hideText(){
			$('#text').hide(300);	
		}
		//Показывает текст
	  function showText(){ 
              $('#text').show(333);  
               }

               //Функции фильма//


   $(document).ready(function(){//при загрузке страници
   		var touch = $('#touch-menu');// cоздаются переменные из класов
   		var menu = $('nav');

   		$(touch).on('click', function(e){//при клике на touch
   			e.preventDefault();//открывание и скрывание менюшки
   			menu.slideToggle();
   		});
   		$(window).resize(function(){
   			var wid = $(window).width();//завписывает ширину экрана в переменную
   			if (wid > 760 && menu.is(':hidden')){ //проверяет ширину экрана
   				menu.removeAttr('style');
   			}
   		});
   });