let Contact1  = {
    name: "Maxwell Wright",
    Phone: "(0191) 719 6495",
    Email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}
let Contact2 = {
    name: "Raja Villarreal",
    Phone: "0866 398 2895",
    Email: "posuere.vulputate@sed.com"
}
let Contact3 = {
    name: "Helen Richards",
    Phone: "0800 1111",
    Email: "libero@convallis.edu"
}
let Contact4 = {

}
let contactArray = [Contact1.name, Contact1.Phone, Contact1.Email,Contact2.name, Contact2.Phone, Contact2.Email, Contact3.name, Contact3.Phone, Contact3.Email ]
// Contact4.name = "Maisie Haley";
// Contact4.Phone = "0913 531 3030";
// Contact4.Email = "risus.Quisque@urna.ca"

Contact4.name = prompt("Enter Name")
Contact4.Phone = prompt("Enter Phone Number")
Contact4.Email = prompt("Enter Email ID")

// contactArray.push("Maisie Haley", "0913 531 3030" , "risus.Quisque@urna.ca")
console.log(Contact1);
console.log(Contact4);
alert(Contact1.Email + "\n"+  Contact1.name + "\n" + Contact1.Phone)
alert(Contact4.Email+ "\n" + Contact4.name  + "\n" + Contact4.Phone)
contactArray.push(Contact4.name, Contact4.Phone, Contact4.Email)
console.log(contactArray.length-1);


