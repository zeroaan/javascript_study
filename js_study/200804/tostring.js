var numbers = ['one', 'two', 'three', 'four', 'five'];
alert(numbers.toString());
alert(numbers);

Array.prototype.toString = function(){
    var str = '';
    for(var i = 0; i < this.length; i++){
        str += i +':'+ this[i]+'\n';
    }
    return str;
}
var numbers = ['one', 'two', 'three', 'four', 'five'];
alert(numbers.toString());
alert(numbers); 