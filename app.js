

function TodoApp(){

var inp =document.getElementById('todo')
var li=document.createElement('li')
var liText=document.createTextNode(inp.value)
li.appendChild(liText)
var list =document.getElementById('list')
list.appendChild(li)




var delBtn =document.createElement('button')
var delText=document.createTextNode('delete')
delBtn.appendChild(delText)
li.appendChild(delBtn)
delBtn.setAttribute('onclick','deleted(this)')
delBtn.setAttribute('class','delbtn')



var editBtn=document.createElement('button')
var editText=document.createTextNode('Edit')
editBtn.appendChild(editText)
li.appendChild(editBtn)
editBtn.setAttribute('onclick','edit(this)')
editBtn.setAttribute('class','editbtn')
inp.value=""

}
function deleted(d){
    d.parentNode.remove()
}


function edit(d){
    var pro =prompt("Enter the Updated Value",d.parentNode.firstChild.nodeValue)
    d.parentNode.firstChild.nodeValue = pro
}

function deleteAll(){
var list =document.getElementById('list')
list.innerHTML=""
}