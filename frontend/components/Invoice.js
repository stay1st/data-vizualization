/**
 * Generate new Invoice
 */
class Invoice {
  constructor(name, date, purchases) {
    this.name = name;
    this.purchases = purchases
    this.date = new Date(date).toLocaleDateString(undefined, {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
}
/* If in ms new Date(ms) || Date.UTC(1993, 0, 05, 21, 3, 1, 22) */


/**
 * Fetch and parse JSON data to create new Invoice objects
 */
 const displayUsers = document.querySelector("#users");

fetch("http://localhost:3000/users")
  .then((response) => response.json())
  .then((jsonData) => {
    jsonData.clients.forEach((data) => {
      const customer = new Invoice(data.name, data.date, data.purchases);
      let sum = 0;
      customer.purchases.reduce((prev, curr) => {
          return sum = prev + curr
      })
      console.log(sum)
      customer.userInvoicePrice = sum
      /*-------------Customer-Log-------------------*/ console.group(
        "Success, JSON.User:",
        customer.name
      );
      /*-------------Purchase-Log-------------------*/ console.log(
        "Purchases:",
        customer.purchases
      );
      /*-------------Date-Log-----------------------*/ console.log(
        "Date:",
        customer.date
      );
      displayUsers.insertAdjacentHTML(
        "beforeend", 
        `<h3>${customer.name}</h3>`
        );
      displayUsers.insertAdjacentHTML(
        "beforeend", 
        `<h3>${customer.date}</h3>`
        );
        // Display purchase prices, some purchases are nested with key:value pairs.
      displayUsers.insertAdjacentHTML(
        "beforeend",
        `<h3>
        ${
          customer.purchases[0] !== undefined 
          ? customer.purchases 
          : Object.values(customer.purchases.items)
        }
        </h3>`
      );
      displayUsers.insertAdjacentHTML(
        "beforeend",
        `<h3>
        ${
          Math.round((customer.userInvoicePrice + Number.EPSILON) * 100) / 100
        }
        </h3>`
      );
    });
  })
  .catch((error) =>
    console.error("The request for the JSON file failed", error)
  );
