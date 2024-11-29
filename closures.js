var counter=0
function add() {
    counter +=1
    return alert(counter)
}

function someOutherFunction() {
    counter+= 10
    return alert(counter)
}


var addClosures= (function (){
    var counter= 0
    return function(){
        counter +=1
        return alert(counter)
    }
})()