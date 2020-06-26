var grades = {
    'X': {'a': 10, 'b': 9, 'c': 6},
    'Y': function(){
        alert("Hello");
    },
    'Z': function(){
        for (var name in this.X) {
            console.log(name, this.X[name]);
        }
    }
}
grades.Z();