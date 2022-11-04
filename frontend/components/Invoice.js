//const userDetails = require('localhost:3000/users');

// fetching the data for the barchart project
// fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
//     .then(response => response.json())
//     .then(data => {
//     document.getElementById('message')
// })

class Invoice {
  constructor(date) {
    this.date = new Date(date).toLocaleDateString(undefined, {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
}

// Keep in mind that new Date is 0 indexed solely for calculating months.
const josh = new Invoice(Date.UTC(1993, 0, 05, 21, 3, 1, 22));
console.log(josh);

// fetch request local environment ONLY does not work on Servers
fetch('http://localhost:3000/users')
.then((response) => response.json())
.then((json) => console.log(json))
.catch((error) => console.error('The request for the JSON file failed', error))


// josh.toLocalString('en-US', {
// 	weekday: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'long',
// })


/**
 * <script type='module' src='./script.js></script>
*/