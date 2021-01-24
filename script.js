console.log("script start");

var name = "Fred";
// display in back
console.log(name);
console.log(name.length);

var nb = 12;
// display in green
console.log(nb);

var nb2 = 12.55;
// display in green
console.log(nb2);
// display in black
console.log(nb2.toString());

var xstr = "33.88";
// convert in interger
console.log(parseInt(xstr));
// convertin float
console.log(parseFloat(xstr));

var pos = name.indexOf("r");
console.log(pos);

var name2 = name.replace("Fred", "Laurent");
console.log(name2);

var str1 = "Salut";
var msg = str1 + " " + name2;
console.log(msg);

var nb3 = nb++;
console.log(nb3);

var QA = (nb3 === 13);
console.log(QA);

var QA = (nb3 == "12" );
console.log(QA);


switch(nb3)
    {
        case 1:
            console.log("Que 1");
            break;
        case 12:
            console.log("Bien 12");
            break;
        default:

    }

function maFct(p1, p2)
{
    var res = p1 + p2;
    return res;
}

console.log(maFct(nb3,2));





