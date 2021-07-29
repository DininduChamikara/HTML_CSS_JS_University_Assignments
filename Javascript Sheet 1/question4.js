let fname = document.getElementById("fname").innerHTML;
let lname = document.getElementById("lname").innerHTML;      
let fullname = fname + " " + lname;
document.getElementById("fullname").innerHTML = fullname;
document.getElementById("fullname").style.color = "blue";
document.getElementById("fullname").style.fontWeight = "bold";

//let btn = document.getElementById("get_sum_btn").innerHTML;

function sum_func(){
    document.getElementById('sum').innerHTML = parseInt(document.getElementById('num_1').value)
         + parseInt(document.getElementById('num_2').value);
}