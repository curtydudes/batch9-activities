

//quotes.push(quoteinput)
//with addeventlistener that goes to pushing 

const quoteList = document.getElementById("quote-List");

var quotes = [
   ' "Masmatanda ako kay Jesus"'
    ,
     '"Best friend ko si T-Rex"'
    ,
    '"Talo ka sa lolo mo"'
    ,
   '"Gusto ko, happy ka!"'
    ,
]

//var for generating random quotes
const btnQuotes = document.getElementById('generate');

//var to select the quote display
const quoteDisplay = document.getElementById('quote-list');

//var to add quotes button
const addNewQuotes = document.getElementById('add-quote-button');


//function to display the content of the array "quotes", after click
//when pressing generate quote button
btnQuotes.addEventListener('click', function(buttonEvent){
    buttonEvent.preventDefault();
    let random = Math.floor(Math.random()*quotes.length);
    quoteDisplay.innerText = quotes[random]
})

addNewQuotes.addEventListener('click', function(addNewEvent){
    addNewEvent.preventDefault();
    let quote = document.getElementById('add-quotes').value;
    quotes.push(quote);
})


//let inputQuote = document.getElementById("add-quotes");

//addNewQuotes.addEventListener('click', function(){
  //  let quote = document.getElementById('add-quotes').value;
  //  quotes.appendChild(quote);
  //  inputQuote.value = "";
  //  console.log(quotes);
//})

