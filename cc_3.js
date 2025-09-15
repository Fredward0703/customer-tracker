// Creating the customer and step 2
let customers = [
    {name:"Phil Foden",email:"PhilFoden47@email.com",purchases:["Soccer Ball", "Shirt", "Ball Pump"]},
    {name:"Erling Haaland",email:"ErlingHaaland9@email.com",purchases:["Dj Equipment", "Goal Net", "Trophy"]},
    {name:"Bernardo Silva",email:"BernardoSilva20@email.com",purchases:["Flag", "Cleats", "Dog"]},
];


//attempting step 3, adding someone new
customers.push({name:"Ruben Dias",email:"RubenDias3@email.com",purchases:["Blue Moon", "Tooth Paste", "ArmBand"]});


//attempting step 3, removing the first person
customers.shift({name:"Phil Foden",email:"PhilFoden47@email.com",purchases:["Soccer Ball", "Shirt", "Ball Pump"]});


//attempting step 4 of updating a persons email
customers.find(change => change.name == "Bernardo Silva").email = "BSilva20@email.com";


//attempting step 4 of adding a new purchase to Haaland's purchases
customers.find(newPurchase => newPurchase.name == "Erling Haaland").purchases = ["Dj Equipment","Goal Net","Trophy","Jersey"];


//step 5, looping the stuff for each customer
customers.forEach(obj => console.log(`${obj.name}\t|\t${obj.email}\t|\t${obj.purchases}`))

//step 5 cont. doing a statement for the customers
customers.forEach(customer => {
    console.log(`${customer.name} bought these items: ${customer.purchases.length}. Their receipt was sent to their email: ${customer.email}`);
});