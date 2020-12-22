let todos = {};
const STORAGE_TODO = "STORAGE_TODO";
const todoBox = document.querySelector('#todo');

// LOCAL STORAGE

// Check if localstorage API is available
if (typeof(Storage) !== "undefined")
    console.log("local storage available")
else
    console.log("oops. your data will gone after page reload")

// read localstorage on first load
if(todoFromLocal = localStorage.getItem(STORAGE_TODO)) {
    todos = JSON.parse(todoFromLocal);
    console.log(todos);

    // loop isi object todos
    for(let key in todos) {
        createList(key, todos[key]);
    }
}

function syncLocalStorage(activity, item, status = false) {
    switch(activity) {
        case 'Add':
        case 'Update':
            todos[item] = status
            break;
        case 'Delete':
            delete todos[item]
            break;
        default:
            break;
    }

    console.log(todos);

    localStorage.setItem(STORAGE_TODO, JSON.stringify(todos));
    return;
}

// TODO FUNCTION

// Fungsi untuk menambahkan todo
function add() {
    //1. Ambil nilai dari teks
    let newText = document.querySelector('#newText');
   
    //2. Tambahkan list baru ke dalam ul
    createList(newText.value);
    syncLocalStorage('Add', newText.value);
    
    //3. Kosongkan fieldnya
    newText.value = ""
}

function createList(text, status = false) {
    let isDone = (status) ? 'done' : ''
    let newTodo = `<li> <span  class='${isDone}' onclick='toggle(this)'> <input type='checkbox'>${text}</span> 
                    <span onclick='removeItem(this)'>[x]</span>                
                   </li>`
    
    todoBox.insertAdjacentHTML('afterbegin', newTodo);
}

// Fungsi untuk mencoret todo
function toggle (element) {
    let status = element.classList.toggle('done');
    syncLocalStorage('Update', element.innerText, status);
}

// Fungsi untuk menghapus todo 
function removeItem (element) {
    element.parentElement.remove();
    syncLocalStorage('Delete', element.previousElementSibling.innerText.trim());
}