var editIndex;

var person = [];
function gas() {
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["lname"].value;
    var z = document.forms["myForm"]["email"].value;
    var a = document.forms["myForm"]["click"].value;

    if (x == "") {
        document.getElementById("one").innerHTML = " required";
        document.getElementById("fname").style.color = "red";
    }
    else {
        document.getElementById("one").innerHTML = "";

    }

    if (y == "") {
        document.getElementById("two").innerHTML = " required";

    }
    else {
        document.getElementById("two").innerHTML = "";

    }

    if (z == "") {
        document.getElementById("three").innerHTML = " required";

    }
    else {
        document.getElementById("three").innerHTML = "";

    }

    if (a == "") {
        document.getElementById("five").innerHTML = " is required";
        return false;
    }
    else {
        document.getElementById("five").innerHTML = "";

    }

    var customerObj = {
        amar: x,
        nath: y,
        kavin: z,
        thiva: a
    };


    person.push(customerObj);
    console.log(person)

console.log(editIndex);
if(editIndex != undefined){
person.splice(editIndex,1);
}

    Vic()

    document.forms["myForm"]["fname"].value = '';
    document.forms["myForm"]["lname"].value = '';
    document.forms["myForm"]["email"].value = '';
    document.forms["myForm"]["click"].value = '';



}

function Vic() {
    var html = "";
    editIndex = undefined;
    for (var i = 0; i < person.length; i++) {
        html += "<tr>";
        html += "<td>" + person[i].amar + "</td>";
        html += "<td>" + person[i].nath + "</td>";
        html += "<td>" + person[i].kavin + "</td>";
        html += "<td>" + person[i].thiva + "</td>";
        html += '<td><button class=" btn btn-success" onclick="Edit(' + i + ')">Edit</button> <button class=" btn btn-info" onclick="Delete(' + i + ')">Delete</button></td>';
    }

    document.getElementById("body").innerHTML = html;
}
function Delete(del) {
    console.log(del);
    person.splice(del, 1);
    Vic();
};
function Edit(edi) {
    editIndex = edi;
    console.log(edi);
    console.log(person);
    console.log(person[edi]);
    document.forms["myForm"]["fname"].value = person[edi].amar;
    document.forms["myForm"]["lname"].value = person[edi].nath;
    document.forms["myForm"]["email"].value = person[edi].kavin;
    document.forms["myForm"]["click"].value = person[edi].thiva;
};

