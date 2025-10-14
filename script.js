//your JS code here. If required.
// Get elements
const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");
const submitBtn = document.getElementById("submit");
const bookList = document.getElementById("book-list");

// Add book
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const titleVal = title.value.trim();
  const authorVal = author.value.trim();
  const isbnVal = isbn.value.trim();

  if (titleVal === "" || authorVal === "" || isbnVal === "") {
    alert("Please fill all fields");
    return;
  }

  // Create row
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${titleVal}</td>
    <td>${authorVal}</td>
    <td>${isbnVal}</td>
    <td><button class="btn btn-danger btn-sm delete">X</button></td>
  `;

  bookList.appendChild(row);

  // Clear input fields
  title.value = "";
  author.value = "";
  isbn.value = "";
});

// Delete book
bookList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
});
