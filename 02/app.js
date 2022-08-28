/*
  !DRUG & DROP 
  this code add function for project
*/

const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

for(const placeholder of placeholders) {
  // item над placeholder куда можно его поместить
  placeholder.addEventListener('dragover', dragOver)
  // item зашел на территорию конкретного placeholder
  placeholder.addEventListener('dragenter', dragEnter)
  // item вышел за территорию конкретного placeholder
  placeholder.addEventListener('dragleave', dragLeave)
  // item отпущен над конкретным элементом
  placeholder.addEventListener('drop', dragDrop)
}

function dragOver(e) {
  e.preventDefault()
}
function dragEnter(e) {
  e.target.classList.add('hovered')
}
function dragLeave(e) {
  e.target.classList.remove('hovered')
}
function dragDrop(e) {
  e.target.classList.remove('hovered')
  e.target.append(item)
}

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

function dragStart(e) {
  e.target.classList.add('hold')
  setTimeout(() => e.target.classList.add('hidden'))
}
function dragEnd(e) {
  e.target.className = 'item' 
}
