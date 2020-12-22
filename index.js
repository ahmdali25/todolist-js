const todo = document.querySelector('#todo');

// Fungsi untuk menambahkan todo
function add() {
    //1. Ambil nilai dari teks
    let newText = document.querySelector('#newText');
   
    //2. Tambahkan list baru ke dalam ul
    let newTodo = "<li> <span onclick='toggle(this)'> <input type='checkbox'>" + newText.value + "</span>" +
                    "<span onclick='removeItem(this)'> [x] </span>" +                
                    "</li>"

    todo.insertAdjacentHTML('afterbegin', newTodo);
    
    //3. Kosongkan fieldnya
    newText.value = ""
}

// Fungsi untuk mencoret todo
function toggle (element) {
    element.classList.toggle('done');
}

// Fungsi untuk menghapus todo 
function removeItem (element) {
    element.parentElement.remove();
}