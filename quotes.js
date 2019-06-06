// check for jquery
if (typeof jQuery == 'undefined') {
 alert("jquery not loaded")
}



const app = document.getElementById('quote');

const container = document.createElement('div');
container.setAttribute('class', 'header');

app.appendChild(container);

$.ajax({
    url: 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?',
    dataType: 'jsonp',
    success: function(data) {
      // your code to handle data here
     // var data = JSON.parse(this.response);
  
    
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = data.quoteText;
  
      container.appendChild(card);
      card.appendChild(h1);   
      card.appendChild(p);
    }
});
  

    
  

// var request = new XMLHttpRequest();
// request.open('GET', 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?', true);
// request.onload = function () {

//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response);
//   if (request.status >= 200 && request.status < 400) {
//     data.forEach(quotes => {
//       const card = document.createElement('div');
//       card.setAttribute('class', 'card');

//       const h1 = document.createElement('h1');
//       h1.textContent = quotes.quoteText;
  
//       container.appendChild(card);
//       card.appendChild(h1);   
//       card.appendChild(p);
//     });
//   } else {
//     const errorMessage = document.createElement('div');
//     errorMessage.textContent = `Gah, it's not working!`;
//     app.appendChild(errorMessage);
//   }
// }

// request.send();