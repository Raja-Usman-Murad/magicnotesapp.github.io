console.log('Magic Notes');
showNotes();

// if user add a note,add it to local storage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');
    let addTitle = document.getElementById('addTitle');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let myObj={
        title: addTitle.value,
        text: addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    // console.log(notesObj);
    showNotes();

});

// Function to show Element from local storage 
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
         <div class="noteCard my-2 mx-2 card" style="width: 18rem; background-color: rgba(192,192,192,0.9);" >
        <div class="card-body">
          <h5  class="card-title text-white">${index +". "+element.title}</h5>
          <p  class="card-text text-white">${element.text}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>
         `
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `<h5 style="color:white; color:white">Nothing to show! Use "Add a note" section above to add</h5>`;
    }
}

// Function to delete note
function deleteNote(index) {
    // console.log("i am deleting", index);
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();

}
// search by text
// let search = document.getElementById('searchTxt');
// search.addEventListener('input', function () {
//     let inputVal = search.value.toLowerCase();
//     // console.log(inputVal);
//     let noteCards = document.getElementsByClassName('noteCard');
//     Array.from(noteCards).forEach(function (element) {
//         let cardTxt = element.getElementsByTagName('p')[0].innerText;
        
//         // console.log(cardTxt);
//         if (cardTxt.includes(inputVal)) {
//             element.style.display = 'block';
//         } else {
//             element.style.display = 'none';
//         }
        
//     })
// })




