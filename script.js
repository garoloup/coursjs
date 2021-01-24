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

// Cond switch
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

// Fct
function maFct(p1, p2)
{
    var res = p1 + p2;
    return res;
}

console.log(maFct(nb3,2));

// Arrays
var fruits = ["pomme", "poire", "banane"];
console.log(fruits);

fruits.pop();
fruits.push("kiwi");
var panier = fruits.slice(0,2);

for (var i=0; i < fruits.length ; i++)
    {
        console.log(fruits[i]);
    }

for (var i=0; i < panier.length ; i++)
    {
        console.log("panier["+i+"]="+panier[i]);
    }

var armoire = ["pomme", 12, true, [2,"deux"]];
for (var i=0; i < armoire.length ; i++)
    {
        console.log(armoire[i]);
    }



