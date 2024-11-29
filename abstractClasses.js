Person= {
    name:"None",
    email: "None",
    sendMail: function(){
        return alert("Send to mail: " + this.name + "/" + this.email)
    }
}

function Customer(name, email){
    this.name= name
    this.email= email
}
function Employee(name, email){
    this.name= name
    this.email= email
}

Customer.prototype= Person
var someCustomer= new Customer("Şevket Emin", "sevketemingurbuz6@gmail.com")
Employee.prototype= Person
var someEmployee= new Employee("Ahmet Furkan", "afurkan@gmail.com")

function abstract() {
    someCustomer.sendMail()
    someEmployee.sendMail()
}

