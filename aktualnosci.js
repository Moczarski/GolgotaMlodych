function aktualnosci(){
	var aktualnosci = 
		'<div id="tlo">'+
			'<span class="title1">23.08.2018</span><br />'+
			'To jest przykładowy tekst, żebyście wiedzieli jak dodawać treści.  '+
			'Korzystajcie z tego wzoru. '+
			'Jest on wykomentowany, żeby nie pojawiał się na stronie. '+
			'Owocnej nauki JS i HTML! :D '+
		'</div>'+
		
		'<button class="but2" onclick="wroc();">WRÓĆ</button>';
		
		document.getElementById('main').innerHTML = aktualnosci;
}