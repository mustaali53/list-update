// var btn = document.getElementById("btn")
// var input = document.getElementById("input")
// var ul = document.querySelector("ul")

// function inputLength(){
//       return input.value.length;
// }

// function createList(){
//     var li = document.createElement("li")
//     li.appendChild(document.createTextNode(input.value))
//     ul.appendChild(li)
//     input.value = "";
// }


// btn.addEventListener("click", function(){
//     if(inputLength() > 0){
//        createList();
//     }
   
// })

// input.addEventListener("keypress", function(event){
//     if(inputLength() > 0 && event.keyCode === 13){
//         createList();
//     }
   
// })

                        // this is for a pro coding

// var btn = document.getElementById("btn")
// var input = document.getElementById("input")
// var ul = document.querySelector("ul")

// function inputLength(){
//       return input.value.length;
// }

// function createList(){
//     var li = document.createElement("li")
//     li.appendChild(document.createTextNode(input.value))
//     ul.appendChild(li)
//     input.value = "";
// }


// function afterClick(){
//         if(inputLength() > 0){
//            createList();
//         }
       
// }

// function afterKeypress(event){
//         if(inputLength() > 0 && event.keyCode === 13){
//             createList();
//         }
       
// }

// btn.addEventListener("click", afterClick)

// input.addEventListener("keypress", afterKeypress)


        //    my own practice

// var button = document.getElementById("btn")
// var input = document.getElementById("input")
// var ul = document.querySelector("ul")


// function inputLength(){
//     return input.value.length
// }

// function createList(){
//     var li = document.createElement("li")
//     li.appendChild(document.createTextNode(input.value))
//     ul.appendChild(li)
//     input.value = "";
// }

// function onClick(){
//         if(inputLength() > 0){
//             createList()
//         }
        
// }

// function keyPress(event){
//         if(inputLength() > 0 && event.keyCode === 13){
//            createList()
//         }
    
// }
// button.addEventListener("click", onClick)

// input.addEventListener("keypress", keyPress) 

var input = document.getElementById("input")
var button = document.getElementById("btn")
var ul = document.querySelector("ul")


function createList(){
    var li = document.createElement("li")
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li)
    input.value = "";
}

button.addEventListener("click", function(){
    if(input.value.length > 0){
         createList()
    }
  
})

input.addEventListener("keypress", function(event){
    if(input.value.length > 0 && event.keyCode === 13){
        createList()
    }
  
})