// Define the tasks array to store the tasks
const tasks = [
    // Default task object
    {
      groupPresenting: "June Cohort",
      presentation: "Cart Javascript",
      date: "2023-08-01",
      time: "14:00",
      addedBy: "Admin",
      meetingLink: "https://www.youtube.com/watch?v=uqzj7cbZC8w"
    }
  ];

  let editingIndex = -1;


function addTask() {
  // Getting the user data from inputs to add into the array
  const groupPresenting = document.getElementById('groupPresenting').value;
  const presentation = document.getElementById('presentation').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const addedBy = document.getElementById('addedBy').value;
  const meetingLink = document.getElementById('meetingLink').value;

  // Making sure all fields are filled in
  if (!groupPresenting || !presentation || !date || !time || !addedBy || !meetingLink) {
    alert('Please fill in all fields.');
    return;
  }

  // Create a new task object
  const newTask = {
    groupPresenting,
    presentation,
    date,
    time,
    addedBy,
    meetingLink
  };

  // Add the new task to the tasks array
  tasks.push(newTask);

  // Update the table on the page
  updateTaskTable();

  // Clear input fields after adding a task
  document.getElementById('groupPresenting').value = '';
  document.getElementById('presentation').value = '';
  document.getElementById('date').value = '';
  document.getElementById('time').value = '';
  document.getElementById('addedBy').value = '';
  document.getElementById('meetingLink').value = '';
}

// Display task
updateTaskTable();

function updateTaskTable() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; // Clear existing tasks
  
    // Loop through the tasks array and add tasks to the table
    tasks.forEach((task, index) => {
      const newRow = document.createElement('div');
      newRow.classList.add('table-row');
  
      newRow.innerHTML = `
        <div>${task.groupPresenting}</div>
        <div>${task.presentation}</div>
        <div>${task.date}</div>
        <div>${task.time}</div>
        <div>${task.addedBy}</div>
        <div><a href="${task.meetingLink}" target="_blank">Join/Watch</a></div>
        <div>

        // Action buttons add / delete / edit
          <button onclick="addTaskAbove(${index})"><i class="fa-solid fa-plus"></i></i></button>
          <button onclick="deleteTask(${index})"><i class="fa-solid fa-trash"></i></button>
          <button onclick="editTask(${index})"><i class="fa-solid fa-pen"></i></button>
        </div>
      `;
  
      taskList.appendChild(newRow);
    });
  }

function deleteTask(index) {
  // Ensure the index is valid
  if (index >= 0 && index < tasks.length) {
    // Remove the task from the tasks array at the specified index
    tasks.splice(index, 1);

    // Update the table on the page
    updateTaskTable();
  }
}

// add task above selected task
function addTaskAbove(index) {
  const groupPresenting = document.getElementById('groupPresenting').value;
  const presentation = document.getElementById('presentation').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const addedBy = document.getElementById('addedBy').value;

  if (!groupPresenting || !presentation || !date || !time || !addedBy) {
    alert('Please fill in all fields.');
    return;
  }

  // Create a new task object
  const newTask = {
    groupPresenting,
    presentation,
    date,
    time,
    addedBy
  };

  // Insert the new task above the clicked task
  tasks.splice(index, 0, newTask);

  // Update the table on the page
  updateTaskTable();

  // Clear input fields after adding a task
  document.getElementById('groupPresenting').value = '';
  document.getElementById('presentation').value = '';
  document.getElementById('date').value = '';
  document.getElementById('time').value = '';
  document.getElementById('addedBy').value = '';
}

function joinMeeting(link) {
    window.open(link, '_blank');
  }

  function editTask(index) {
    editingIndex = index; // Set the editingIndex variable to the clicked task index
    const task = tasks[index];
    document.getElementById('groupPresenting').value = task.groupPresenting;
    document.getElementById('presentation').value = task.presentation;
    document.getElementById('date').value = task.date;
    document.getElementById('time').value = task.time;
    document.getElementById('addedBy').value = task.addedBy;
    document.getElementById('meetingLink').value = task.meetingLink;
  }

//   Update edited task
  function updateTask() {
    const groupPresenting = document.getElementById('groupPresenting').value;
    const presentation = document.getElementById('presentation').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const addedBy = document.getElementById('addedBy').value;
    const meetingLink = document.getElementById('meetingLink').value;
  
    if (!groupPresenting || !presentation || !date || !time || !addedBy || !meetingLink) {
      alert('Please fill in all fields.');
      return;
    }
  
    if (editingIndex !== -1) {
      // If editingIndex is not -1, it means we are editing an existing task
      // Update the corresponding task in the tasks array
      tasks[editingIndex] = {
        groupPresenting,
        presentation,
        date,
        time,
        addedBy,
        meetingLink
      };
  
      editingIndex = -1; // Reset the editingIndex variable
      updateTaskTable(); // Update the table to reflect the changes
      clearInputFields(); // Clear the input fields after updating
    }
  }

  function clearInputFields() {
    document.getElementById('groupPresenting').value = '';
    document.getElementById('presentation').value = '';
    document.getElementById('date').value = '';
    document.getElementById('time').value = '';
    document.getElementById('addedBy').value = '';
    document.getElementById('meetingLink').value = '';
  }