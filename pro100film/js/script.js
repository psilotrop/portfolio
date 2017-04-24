
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