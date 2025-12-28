const item = JSON.parse(localStorage.getItem("soundspaceItem"));

if (item) {
  document.getElementById("title").textContent = item.title;
  document.getElementById("description").textContent = item.description;
  document.getElementById("image").src = item.img;
}
