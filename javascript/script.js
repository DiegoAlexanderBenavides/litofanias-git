import checkComplete from "../component/chechComplete.js";
import deleteicon from "../component/deleteIcon.js";

( ()=>{
   const btn= document.querySelector("[data-form-btn]");

const createtask=(evento)=>{
    evento.preventDefault();
    const input= document.querySelector("[data-form-input]");
    const value=input.value;
    const list=document.querySelector("[data-list]")
    input.value='';
    const task=document.createElement('li');
    task.classList.add('card')
    const taskcontent=document.createElement("div");
    taskcontent.appendChild(checkComplete());
    
    const titleTask=document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerHTML=value;
    taskcontent.appendChild(titleTask);
    taskcontent.appendChild(deleteicon());

  //task.innerHTML=content;
  task.appendChild(taskcontent);
  task.appendChild(deleteicon());
  list.appendChild(task)

    console.log(value)

}
console.log(btn);
btn.addEventListener('click', createtask);


})();