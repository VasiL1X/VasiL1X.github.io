/*
1. Выбрать поле для игры ++
2. Заполнить поле карточками ++
3. Сделать клик по карточкам ++
4. Сделать переворачивание карточек ++
	4.1. Размещаем картинки для каждой карточки
	4.2. Показываем картинку
5. Если выбрано 2 картинки проверяем на совпадение
	5.1. Если картинки совпадают, то удаляем карточки
	5.2. Перевернуть все выбранные карточки
6. Если все карточки удалены, вывести окно с перезапуском игры 
7. При клике на кнопку рестарт обновлем страницу
*/

var cardsField = document.querySelector("#cards");
var resetBlock = document.querySelector("#reset");
var resetBtn = document.querySelector("#reset-btn"); 
var diffField = document.querySelector("#difficult");

var countCards = 0;

var pause = true;

diffField.addEventListener("click", (event) => {
	if (event.target.tagName == "BUTTON"){
		switch (event.target.id) {
		case "16":
			countCards = 16;
			addCards(8);
			break;
		case "36":
			countCards = 36;
			addCards(18);
			break;
		case "48":
			countCards = 48;
			addCards(24);
			break;
	}
	diffField.style.display = 'none';
	pause = false;
	}
})

var images = [];

var deletedCards = 0;

var selected = [];

function addCards(num) {

	for (var i = 0; i < countCards; i++) {
		var li = document.createElement("li");
			li.id = i;
		cardsField.appendChild(li);
	}

	for (var i = 0; i < num; i++) {
		images[i] = i+1;
	}

	images = images.concat(images).sort(function(){
  		return Math.random() - 0.5;
	});
	var li = cardsField.getElementsByTagName("li");
	console.log(typeof num);
	switch (num) {
		case 18:
			for (i = 0; i < 36; i++) {
				li[i].style.width = '62.5px';
				li[i].style.height = '62.5px';
				li[i].style.backgroundSize = '48px auto';
			}
			break;
		case 24:
			cardsField.style.width = '532px'
			for (i = 0; i < 48; i++) {
				li[i].style.width = '62.5px';
				li[i].style.height = '62.5px';
				li[i].style.backgroundSize = '48px auto';
			}
			break;
	}
}





cardsField.addEventListener("click", (event) => {
	if (!pause) {

		var element = event.target;

		if (element.tagName == "LI" && element.className != "active") {
			selected.push(element);
			element.className = "active";
			var img = images[element.id];

			element.style.backgroundImage = "url(images/" + img + ".png)";
			console.log(selected);
			if (selected.length == 2) {
				pause = true;
				console.log(images[selected[0].id] == images[selected[1].id])
				if (images[selected[0].id] == images[selected[1].id]) {
					selected[0].style.visibility = "hidden";
					selected[1].style.visibility = "hidden";
					deletedCards += 2;
				}
				setTimeout(refreshCards, 600);
				
				
			}
		}
	}

})

function refreshCards() {
	for (var i = 0; i < countCards; i++) {
		cardsField.children[i].className = "";
		cardsField.children[i].style.backgroundImage  = 'url("images/back.png")';
	}
	if (deletedCards == countCards) {
		resetBlock.style.display = 'block';
	}
	selected = [];
	pause = false;
}

resetBtn.onclick = function() {
	location.reload();
} 

