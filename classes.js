function Customer(firstName, lastName){
    this.firstName= firstName
    this.lastName= lastName

    var someField= "some value"

    this.sendProdcut= function(){
        return "Product send"
    }
}

var sevket= new Customer("Şevket Emin", "Gürbüz")

function classes() {
    alert(sevket.sendProdcut())
}