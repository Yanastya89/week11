

function createTask() {
const listToDo = document.getElementById ('spisok');
const input = document.getElementById ('input');
const inputText = input.value;
	let item = document.createElement('li');
  item.textContent = inputText;
	  listToDo.append(item);
	input.value = '';
	} 
	
function checkTask(event){
		const clickedElement = event.target;

  // Проверяем, что кликнули на элемент списка
  if (clickedElement.tagName === 'LI') {
    // Переключаем состояние выполнения задачи
    clickedElement.classList.toggle('completed');
		clickedElement.style.textDecoration = clickedElement.classList.contains('completed') ? 'line-through' : 'none';
		clickedElement.style.cursor = clickedElement.classList.contains('completed') ? 'default' : 'pointer';
  }
			}
		
			const button = document.getElementById('btn');
			button.addEventListener('click', createTask);
			document.addEventListener('click', checkTask);









