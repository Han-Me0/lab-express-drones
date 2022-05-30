document.addEventListener('DOMContentLoaded', () => {

  console.log('lab-express-drones JS imported successfully!');

}, false);

const deleteButton = document.getElementById("drone-delete-button");
deleteButton.addEventListener("click", async (event) => {
  event.preventDefault();
  console.log("hello from button");
  console.log(window.location.href);
  const newURL = new URL(window.location.href);
  console.log(newURL);
  console.log(newURL.pathname);
  await fetch(newURL.pathname + "/delete", { method: "DELETE" });
  window.location.replace("/drones");
});
const editButton = document.getElementById("drone-edit-button");
editButton.addEventListener("click", async (event) => {
  event.preventDefault();
  const editForm = document.getElementById("drone-edit-button");
  editForm.classList.toggle("hidden");
  const details = document.getElementById("droneDetails");
  details.classList.toggle("hidden");
  editButton.classList.toggle("hidden");
  console.log("Edit button was clicked");
});