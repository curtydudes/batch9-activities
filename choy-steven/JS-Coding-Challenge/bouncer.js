const nightClubRegister = [
    {
        name: 'Tony',
        lastname: 'Stark',
        age: 25,
        gender: 'male'
    },
    {
        name: 'Harry',
        lastname: 'Potter',
        age: 16,
        gender: 'male'
    },
    {
        name: 'Hermione',
        lastname: 'Granger',
        age: 17,
        gender: 'female'
    },
    {
        name: 'Steve',
        lastname: 'Rogers',
        age: 62,
        gender: 'male'
    }
]

for (let i=0; i < nightClubRegister.length; i++) {
     if (nightClubRegister[i].age<18) {
        if (nightClubRegister[i].gender === "male"){

        console.log ("Sorry, Mr. " + 
        nightClubRegister[i].lastname + " you are not allowed inside");
        }
            if (nightClubRegister[i].gender === "female"){
            console.log ("Sorry, Ms. " + 
            nightClubRegister[i].lastname + " you are not allowed inside");
            }
}
    if (nightClubRegister[i].age >=18) {
        if (nightClubRegister[i].gender === "male"){
        console.log ("Hi, Mr. " +
        nightClubRegister[i].lastname + " you are allowed inside");
        }
            if (nightClubRegister[i].gender === "female"){
            console.log ("Hi, Ms/Mrs. " +
            nightClubRegister[i].lastname + " you are allowed inside");
            }
        }
    }