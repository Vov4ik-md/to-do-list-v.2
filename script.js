let inputTask = document.querySelector('.myinput')
let list = document.querySelector(".mytasks")
let ifTaskComplete = false
function newTask() {
	let li = document.createElement('LI')
	let inputValue = document.querySelector('.myinput').value
	let taskText = document.createTextNode(inputValue)
	li.appendChild(taskText)
	li.classList.toggle('added')
	if (inputValue === '') {
		alert('Need input some task!!')
	} else {
		if (!ifTaskComplete) {
			list.appendChild(li);
		} else {
			li.classList.add('hidden')
			list.appendChild(li)
		}
	}
	document.querySelector('.myinput').value = ''

	let span = document.createElement('SPAN')
	let txt = document.createTextNode("\u00D7")
	span.className = 'close'
	span.appendChild(txt)
	li.appendChild(span)

	span.addEventListener("click", function () {
		li.remove()
	})
}

inputTask.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		newTask()
	}
})

list.addEventListener("click",function (e) {
	if (e.target.tagName === "LI") {
		e.target.classList.toggle("checked")
		e.target.classList.toggle("added")
		}
	}, false
)

function completedTasks() {
	let added = document.querySelectorAll(".added")
	for (let i = 0; i < added.length; i++){
		added[i].style.display = "none"
	}
	let completed = document.querySelectorAll(".checked")
	for (let i = 0; i < completed.length; i++){
		completed[i].style.display = "block"
	}
	ifTaskComplete = true
}

function incompletedTasks() {
	let completed = document.querySelectorAll('.checked')
	for (let i = 0; i < completed.length; i++)
	completed[i].style.display = 'none'
	let added = document.querySelectorAll(".added")
	for (let i = 0; i < added.length; i++)
	added[i].style.display = "block"
}

function showAll() {
	let li = document.getElementsByTagName('li')
	for (let i = 0; i < li.length; i++)
	li[i].style.display = 'block'
	
}