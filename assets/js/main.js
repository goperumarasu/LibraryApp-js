const formEl=document.querySelector('form');
const lib=new Library();

formEl.addEventListener('submit',(e)=>{
    e.preventDefault();
    const booknameEl=document.getElementById('book-name').value.trim();
    const bookauthorEl=document.getElementById('book-author').value.trim();

    if(booknameEl && bookauthorEl)
    {
        const addedbooks=new Book(booknameEl, bookauthorEl);
        lib.addBook(addedbooks)
    }
    renderlibrary();
    document.getElementById('book-name').value='';
    document.getElementById('book-author').value='';
    
    
    
})
function markBookAsRead(index){
    lib.getbooks()[index].markAsRead();
    renderlibrary();
}

function removeBook(index){
    lib.removeBooks(index);
    renderlibrary();
}
function renderlibrary(){
    const renderedLibraryEl=document.getElementById('renderedLibrary');
    const bookcountEl=document.getElementById('bookcount');
    bookcountEl.textContent=lib.bookCount();

    renderedLibraryEl.innerHTML="";
    lib.getbooks().forEach((book,index)=>renderedLibraryEl.innerHTML+=`<li class="bg-orange-200 p-3 rounded flex justify-between">
    <div class="${book.isRead() ? 'line-through': ''}">
        ${book.getTitle()} by ${book.getAuthor()}
    </div>
    <div>
        <button class="px-2 py-1 bg-green-600 text-sm rounded text-white" onclick="markBookAsRead(${index})">Mark as Read</button>
        <button class="px-2 py-1 bg-red-600 text-sm rounded text-white" onclick="removeBook(${index})">Remove</button>
    </div>
</li>`)
            
            
}