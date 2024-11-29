var student= {
    firstName: "Şevket Emin",
    lastName: "Gürbüz",
    fullName: function () {
        return this.firstName + " " + this.lastName
    }
}

function Customer(first, last, age, city){
    this.first= first
    this.last= last
    this.age= age
    this.city= city
}

var someCustomer= new Customer("Şevket Emin", "Gürbüz", 24, "Sivas")
function customer() {
    customer(someCustomer.last)
}