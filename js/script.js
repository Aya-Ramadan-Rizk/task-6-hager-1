// var orginal = document.getElementById("orginal")
// ---------------- (box ----------------
var box1 = document.getElementById("box1")
var box2 = document.getElementById("box2")
var box3 = document.getElementById("box3")
var box4 = document.getElementById("box4")
var box5 = document.getElementById("box5")
var box6 = document.getElementById("box6")
// ---------------- box) ----------------
// ---------------- (target ----------------
var target1= document.getElementById("target1")
var target2 = document.getElementById("target2")
var target3 = document.getElementById("target3")
var target4 = document.getElementById("target4")
var target5 = document.getElementById("target5")
var target6 = document.getElementById("target6")
// ---------------- target) ----------------
// *************************************************************************************
// ---------------- (box ----------------
box1.addEventListener('dragstart', (e) => e.dataTransfer.setData('text' ,'box1' ))
box2.addEventListener('dragstart', (e) => e.dataTransfer.setData('text' ,'box2' ))
box3.addEventListener('dragstart', (e) => e.dataTransfer.setData('text' ,'box3' ))
box4.addEventListener('dragstart', (e) => e.dataTransfer.setData('text' ,'box4' ))
box5.addEventListener('dragstart', (e) => e.dataTransfer.setData('text' ,'box5' ))
box6.addEventListener('dragstart', (e) => e.dataTransfer.setData('text' ,'box6' ))
// ---------------- box) ----------------
// ---------------- (target ----------------
target1.addEventListener('dragover' , (e) => e.preventDefault())
target2.addEventListener('dragover' , (e) => e.preventDefault())
target3.addEventListener('dragover' , (e) => e.preventDefault())
target4.addEventListener('dragover' , (e) => e.preventDefault())
target5.addEventListener('dragover' , (e) => e.preventDefault())
target6.addEventListener('dragover' , (e) => e.preventDefault())
// ---------------- target) ----------------
// *************************************************************************************
target1.addEventListener('drop' , (e) =>{
    
    var id = e.dataTransfer.getData('text')
    var elememnt = document.getElementById(id)
    target1.appendChild(elememnt)
})
target2.addEventListener('drop' , (e) =>{
    
    var id = e.dataTransfer.getData('text')
    var elememnt = document.getElementById(id)
    target2.appendChild(elememnt)
})
target3.addEventListener('drop' , (e) =>{
    
    var id = e.dataTransfer.getData('text')
    var elememnt = document.getElementById(id)
    target3.appendChild(elememnt)
})
target4.addEventListener('drop' , (e) =>{
    
    var id = e.dataTransfer.getData('text')
    var elememnt = document.getElementById(id)
    target4.appendChild(elememnt)
})
target5.addEventListener('drop' , (e) =>{
    
    var id = e.dataTransfer.getData('text')
    var elememnt = document.getElementById(id)
    target5.appendChild(elememnt)
})
target6.addEventListener('drop' , (e) =>{
    
    var id = e.dataTransfer.getData('text')
    var elememnt = document.getElementById(id)
    target6.appendChild(elememnt)
})
// *************************************************************************************
// box1.addEventListener('dblclick', () =>{
//     orginal.appendChild(box1)
// })
// box2.addEventListener('dblclick', () =>{
//     orginal.appendChild(box2)
// })