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

    const content=`
    ${checkComplete}
    <span class="task">${value}</span>
  
  <i class="fas fa-trash-alt trashIcon icon"></i>`
  //task.innerHTML=content;
  task.appendChild(taskcontent);
  list.appendChild(task)

    console.log(value)

}
console.log(btn);
btn.addEventListener('click', createtask);
const checkComplete=()=>{
    const i=document.createElement("i");
    i.classList.add("far",'fa-check-square','icon');
    i.addEventListener('click', completeTask);
    return i;
}

const completeTask=(event)=>{
    const element=event.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');

    
}
})();