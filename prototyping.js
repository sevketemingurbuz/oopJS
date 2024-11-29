function Customer(first, last, age, city){
    this.first= first
    this.last= last
    this.age= age
    this.city= city
}
var someCustomer= new Customer("Şevket Emin", "Gürbüz", 24, "Sivas")

Customer.prototype.eMail= "sevketemingurbuz6@gmail.com"
Customer.prototype.fullName= function () {
    return this.first + " " + this.last
}

function alert() {
    alert(someCustomer.last)
    alert(someCustomer.eMail)
}
