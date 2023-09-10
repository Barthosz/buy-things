import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://realtime-database-77e46-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListFromDB = ref(database, "shoppingList");

let shoppingList = [];
const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const ulEl = document.getElementById("shopping-list");

addButtonEl.addEventListener("click", function () {
  let inputValue = inputFieldEl.value;
  push(shoppingListFromDB, inputValue);
  shoppingList.push(inputValue);
  ulEl.innerHTML += "<li>" + inputValue + "</li>";
  inputFieldEl.value = "";
});
