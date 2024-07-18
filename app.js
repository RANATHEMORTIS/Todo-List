let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("#inp");

btn.addEventListener("click" , function () {
    let item = document.createElement("li");   // create a element
    item.innerText = inp.value;

    let delBtn = document.createElement ("button");  // create  element for delt button
     delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    
    item.appendChild(delBtn);

    ul.appendChild(item);

    inp.value = " ";
});

// let deltBtns = document.querySelectorAll(".delete");
// for(deltBtns of deltBtns) {
//     deltBtns.addEventListener("click" , function () {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }

ul.addEventListener("click", function (event){
    if(event.target.nodeName=="BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});