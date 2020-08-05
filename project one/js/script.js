
// Object Literal for the Salon
const salon={
    name:"Fauna Fashionista",
    phone: "555-555-5555",
    address:{
        city: "Lake Havasu City",
        country: "USA", 
        number: "125-K"
    },
    pets: []
}
// console.log(salon);
let {name, phone, address:{city, country, number}}=salon;
// console.log(city);

document.getElementById("info").innerHTML=`<p> <b>${city}  
    </b>${country} ${number}
    <br>
    ${phone}
</p>`


// Object constructor for the pets

class Pet{
    constructor(name, age, type, breed, gender, service, owner, contact){
        this.name = name;
        this.age = age;
        this.type = type;
        this.breed = breed;
        this.gender = gender;
        this.service = service;
        this.owner = owner;
        this.contact = contact;
    }
}

const scooby = new Pet("Scooby", 4, "Dog", "Dane", "Male", "Full", "Shaggy", "444-444-4444");
const sif = new Pet("Sif", 78, "Wolf", "Wolf", "Female", "Full", "Artorius", "333-333-3333");
const henry = new Pet("Henry", 1, "Dog", "Labrador", "Male", "Nails Cut", "Gabe", "222-222-2222");
const trevor = new Pet("Trevor", 3, "Cat", "Calico", "Male", "Bath", "Leanna", "111-111-1111");

salon.pets.push(scooby);
salon.pets.push(sif);
salon.pets.push(henry);
salon.pets.push(trevor);

console.log(salon.pets.length);

for(i=0;i<salon.pets.length;i++){
    console.log(salon.pets[i].name);
    document.getElementById("petlist").innerHTML = `<p class="pet"> ${salon.pets[i].name} <br></p>`;
};


