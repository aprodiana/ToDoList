const newToDo = document.getElementById('form-to-do');
const addTask = document.getElementById('list-to-do');

// display no to-do message
const checkIfAllDone = () => {
    if (addTask.childElementCount == 1) {
        document.getElementById('all-done').removeAttribute("class");   
    }
};

// hide no to-do message
const hideAllDone = () => {
    document.getElementById('all-done').setAttribute("class", "hidden");
};

newToDo.addEventListener('keydown', hideAllDone);

//remove list item
const itemClickHandler = event => {
    if(event.target.tagName.toLowerCase() == 'li') {
    event.target.remove();
    checkIfAllDone();
    }
};

// add new task to list
const submitHandler = event => {
    event.preventDefault();

    let newListItemString = `${event.target.elements['to-do-task'].value}`;
    
    if(newListItemString == "") {
        document.getElementById('text-error').removeAttribute("class");
    } else {
        let newListItem = document.createElement('li');

        if(newListItemString.endsWith("!")) {
        newListItem.setAttribute("class", "urgent");
        } else {
        newListItem.setAttribute("class", "new-task");
        };

        if(newListItemString.length > 62) {
        newListItem.innerHTML += `${event.target.elements['to-do-task'].value.slice(0, 63)}...`;
        } else {
        newListItem.innerHTML += newListItemString;
        }
        newListItem.setAttribute("title", `${newListItemString}`);
        addTask.appendChild(newListItem);
    };

    event.target.elements['to-do-task'].value = '';
    //${event.target.elements['to-do-task'].value.slice(0, 62)}...
    addTask.addEventListener('click', itemClickHandler);
};

// hide text-error message
const hideTextError = () => {
    document.getElementById('text-error').setAttribute("class", "hidden");
};

newToDo.addEventListener('keydown', hideTextError);

newToDo.addEventListener('submit', submitHandler);