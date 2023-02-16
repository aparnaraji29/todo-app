// var xhr = new XMLHttpRequest();
// xhr.open("GET","https://jsonplaceholder.typicode.com/todos");


//     xhr.send();



// xhr.onreadystatechange = function(){
//     if(xhr.readyState==4 && xhr.status==200){
//    var result_data = JSON.parse (xhr.responseText) ;
//    var html_content ="";
//    for(i=0;i<result_data.length;i++){

//     var current_record = result_data[i];
//    html_content = html_content+" <tr> <td>"+current_record.id+"</td>  <td>"+current_record.title+"</td>  <td  class=boxes> <input onchange=onCheckboxChange(); type=checkbox ></td> </tr>";
//     }
//     document.getElementById("result_area").innerHTML=html_content;
// }

// }



const container = document.getElementById('container');
const fetchButton = document.getElementById('fetch-button');
const taskTable = document.getElementById('task-table');
const heading = document.getElementById('heading');
const completedCheckboxes = new Set();

function handleCheckboxClick(event) {
  if (event.target.checked) {
    completedCheckboxes.add(event.target);
    if (completedCheckboxes.size === 5) {
      showCongratsMessage();
    }
  } else {
    completedCheckboxes.delete(event.target);
  }
}

function showCongratsMessage() {
  const message = `Congrats. 5 Tasks have been Successfully Completed`;
  alert(message);
}

function handleFetchButtonClick() {
  fetchButton.style.display = 'none'; // hide the image
  taskTable.style.display = 'table'; // show the task table
  heading.style.display = 'none';
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(tasks => {
      // iterate over each task and create a corresponding table row
      tasks.forEach(task => {
        const row = document.createElement('tr');

        const taskIdCell = document.createElement('td');
        taskIdCell.textContent = task.id;
        row.appendChild(taskIdCell);

        const taskNameCell = document.createElement('td');
        taskNameCell.textContent = task.title;
        row.appendChild(taskNameCell);

        const completedCell = document.createElement('td');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.disabled = task.completed; // disable the checkbox if the task is already completed
        checkbox.addEventListener('click', handleCheckboxClick);
        completedCell.appendChild(checkbox);
        row.appendChild(completedCell);

        taskTable.appendChild(row);
      });
    });
}

fetchButton.addEventListener('click', handleFetchButtonClick);
