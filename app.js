// 程式碼寫這裡
document.addEventListener("DOMContentLoaded" , ()=>{
    const taskinput = document.querySelector("#taskInput")
    const addBtn = document.querySelector("#addBtn")
    const todolist = document.querySelector(".todo-list")

    const creatlist = () =>{
        const task = taskinput.value
        const todoitem = `<li class="todo-item">
        <span class="item">${task}</span>
        <button class="closeBtn">X</button>
      </li>`
      todolist.insertAdjacentHTML("afterbegin" , todoitem)
      taskinput.value = ""
      taskinput.focus()
    }

    todolist.addEventListener("click" , (e) =>{
        if(e.target.nodeName === "BUTTON"){
            e.target.parentNode.remove()
        }
    })

    taskinput.addEventListener("keypress" ,(e)=>{
        if(e.key === "Enter"){
        creatlist()
        }
    })

    addBtn.addEventListener("click" , () =>{
        creatlist()
    })
})