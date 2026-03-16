const form = document.getElementById("book-form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");
const bookList = document.getElementById("book-list");

form.addEventListener("submit", function(e) {

e.preventDefault();

const titleVal = title.value.trim();
const authorVal = author.value.trim();
const isbnVal = isbn.value.trim();

if(titleVal === "" || authorVal === "" || isbnVal === "") {
alert("Please fill all fields");
return;
}

const row = document.createElement("tr");

row.innerHTML = `
<td>${titleVal}</td>
<td>${authorVal}</td>
<td>${isbnVal}</td>
<td><a href="#" class="delete">X</a></td>
`;

bookList.appendChild(row);

title.value = "";
author.value = "";
isbn.value = "";

});

bookList.addEventListener("click", function(e){

if(e.target.classList.contains("delete")){
e.target.parentElement.parentElement.remove();
}

});
