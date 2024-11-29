function sendmail(personInterface){
    var name= personInterface.name
    var to= personInterface.email

    function sendToMail(){
        return alert("Send to mail: " + name + "/" + to)
    }
    sendToMail()
}

function Customer(name, email){
    this.name= name
    this.email= email
}
function Employee(name,email){
    this.name= name
    this.email= email
}

var someCustomer= new Customer("Şevket Emin", "sevketemingurbuz6@gmail.com")
var someEmployee= new Employee("Ahmet Furkan", "afurkan@gmail.com")

function interfaces(){
    sendmail(someCustomer)
    sendmail(someEmployee)
}