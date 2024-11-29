function Person(firstName, lastName){
    this.firstName= firstName
    this.lastName= lastName
}
function Student(favoriteCourse){
    this.favoriteCourse= favoriteCourse
}

Student.prototype= new Person("Şevket Emin", "Gürbüz")
var sevket= new Student("Java")

function inheritance(){
    alert(sevket.lastName + " " + sevket.favoriteCourse)
}