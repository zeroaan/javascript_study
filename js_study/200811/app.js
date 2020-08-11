let a = "global";

function first() {
    let a = "fresh";
    
    function second() {
        console.log(a);
    }
}


let b = 7 + "1";
console.log(b);
console.log(typeof b);


var jbBtn = document.createElement( 'button' );
var jbBtnText = document.createTextNode( 'Click' );
jbBtn.appendChild( jbBtnText );
document.body.appendChild( jbBtn );