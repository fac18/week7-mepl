const newUser = document.getElementById("new-username");
const newPassword = document.getElementById("new-password");
const confirmNewPassword = document.getElementById("confirm-new-password");
const registerBtn = document.getElementById("registerBtn");
const nameField = document.getElementsByClassName("nameField")[0];
const displayUsername = document.getElementsByClassName("displayUsername")[0];
const kitty = document.querySelector("#kitty")

// registerBtn.addEventListener("click", event => {
//   event.preventDefault();
//   console.log(newUser.value);
//   console.log(newPassword.value);
//   console.log(confirmNewPassword.value);
//   if (newUser.value) {
//     let yourName = newUser.value;
//     let xhr = new XMLHttpRequest();
//     // DOM manipulation
//     nameField.style.display = "none";
//     var para = document.createElement("p");
//     para.classList.add("NWrapper");
//     var displayUser = document.createTextNode(
//       `Hi ${yourName}, get started on your 5 a day!`
//     ); 
//     // Create a text node
//     para.appendChild(displayUser);
//     displayUsername.appendChild(para);

//     let submitName = "submitname=" + yourName;
//     let encodedName = encodeURIComponent(submitName);
//     console.log(encodedName);

//     xhr.onreadystatechange = () => {
//       if (xhr.readyState == 4 && xhr.status == 200) {
//         let kittyAmount = JSON.parse(xhr.responseText);
//         kitty.textContent = `Kitty: ${kittyAmount}`;
//       }
//     };
//     xhr.open("POST", encodedName, true);
//     xhr.setRequestHeader('Content-Type', 'text/plain');
//     xhr.send();
//   }
// });

// Request to get stock levels from database
// const getStock = () => {
//   const xhr = new XMLHttpRequest();
//   const url = "/shop/getstock";
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       console.log(xhr.responseText);
//       const stockArray = JSON.parse(xhr.responseText);
//       console.log(stockArray);
//       populateStockTable(stockArray);
//     }
//   };
//   xhr.open("GET", url, true);
//   xhr.send();
// };



// When page loads, retrieve stock levels from database
// window.addEventListener("load", getStock);


// const checkUser = () => {
//   const xhr = new XMLHttpRequest();
//   const url = "/getUser";
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       const usersObj = JSON.parse(xhr.responseText);
//       usersObj.map( x => {
        
//       })
//     }
//   };
//   xhr.open("GET", url, true);
//   xhr.send();
// };



// List stock items on client side via DOM manipulation
const populateStockTable = arr => {
  const stockTable = document.querySelector(".stock_table tbody");

  // Clear all fruit listed on landing page
  while (stockTable.children.length > 1) {
    stockTable.removeChild(stockTable.lastChild);
  }

  arr.forEach((item, index) => {
    // Create a new row for each fruit
    let fruit = document.createElement("tr");

    // In same row, create a new column for each fruit name
    let fruitName = document.createElement("td");
    fruitName.innerText = item.fruit;
    fruit.appendChild(fruitName);

    // In same row, create a new column for quantity in stock
    let fruitStock = document.createElement("td");
    fruitStock.innerText = item.stock;
    fruit.appendChild(fruitStock);

    // In same row, create a new column to display fruit price
    let fruitPrice = document.createElement("td");
    fruitPrice.innerText = item.price;
    fruit.appendChild(fruitPrice);

    // In same row, create a new button to Add to Basket
    let addToBasketButton = document.createElement("button");
    addToBasketButton.innerText = "Add to basket";
    addToBasketButton.classList.add("add-to-basket");
    addToBasketButton.setAttribute("onclick", `addToBasket('${item.fruit}')`);
    fruit.appendChild(addToBasketButton);

    // Add newly created fruit row (fruit, quantity, price, button) to stockTable
    stockTable.appendChild(fruit);
  });
};

// const addToBasket = itemName => {
//   const xhr = new XMLHttpRequest();
//   const url = `/addItemName=${itemName}`;
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       const updatedBasket = JSON.parse(xhr.responseText);
//       //update inventory
//       getStockData();
//       // getUserData();
//       getBasket(updatedBasket);
//     }
//   };
//   xhr.open("GET", url);
//   xhr.send();
// };


const extistingUsername = document.getElementById('existing-username');
const existingPassword = document.getElementById('existing-password');
const loginBtn = document.getElementById('loginBtn');


const getExistingUser = () => {
  event.preventDefault();
const xhr = new XMLHttpRequest();
  const url = `/login?name=${extistingUsername.value}?password=${existingPassword.value}`;
  console.log(url);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
      const existingUserArray = JSON.parse(xhr.responseText);
      console.log(existingUserArray);
      // populateStockTable(stockArray);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

loginBtn.addEventListener("click", getExistingUser);



