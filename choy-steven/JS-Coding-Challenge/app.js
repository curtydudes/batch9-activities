var bookCount = 0

function increment(){
    bookCount +=1
}
increment ()

let books = ['Moby Dick', 'Alice in Wonderland', 'Hungry Caterpillar']

function replaceBooks(){
    books = ['Life of Pi', 'Grokkings Algorithms', 'New Earth']
}
replaceBooks()

function textCustomer() {
    {
       let firstName = 'Molly' 
    }
    console.log('Hi ' + firstName + ', your book is now in')
}
textCustomer()


const name = 'Manny';

function autoComplete() {
    var age = 23
    {
        var age = 24
    }
    console.log('I, ' + name + ' can confirm, I am currently ' + age + ' years of age.')
}
autoComplete()

const car = {
    carName: 'Honda',
    carType: 'Odyssey',
    gasEfficient: false,
    capacity: 10,
    thisCar: function(){
        console.log( this.carName + ' should be car efficient but it is '+ this.gasEfficient);
    },
};

carName.thisCar();