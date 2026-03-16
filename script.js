// Get elements
const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");
const submitBtn = document.getElementById("submit");
const bookList = document.getElementById("book-list");

// Add book
submitBtn.addEventListener("click", function(e) {
  e.preventDefault();

  const titleVal = title.value.trim();
  const authorVal = author.value.trim();
  const isbnVal = isbn.value.trim();

  if (titleVal === "" || authorVal === "" || isbnVal === "") {
    return;
  }

  // create row
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${titleVal}</td>
    <td>${authorVal}</td>
    <td>${isbnVal}</td>
    <td><a href="#" class="delete">X</a></td>
  `;

  bookList.appendChild(row);

  // clear fields
  title.value = "";
  author.value = "";
  isbn.value = "";
});

// delete row
bookList.addEventListener("click", function(e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
});
