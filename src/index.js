import "./styles.css";
const api = `https://randomuser.me/api`;
const mainApp = document.getElementById("app");
const addUser = document.getElementById("user-btn");

addUser.addEventListener("click", async () => {
  const useData = await fetch(api, {
    method: "GET"
  });
  const userJson = await useData.json();
  const user = userJson.results[0];
  const userEl = document.createElement("div");
  userEl.innerHTML = `<div> 
    ${user.name.title} ${user.name.first} ${user.name.last}
   </div>`;
  mainApp.appendChild(userEl);
});
