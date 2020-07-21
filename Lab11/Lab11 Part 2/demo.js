//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/


console.log("console log - hello world");//log in developer tools
var globalX = 100;//global scope

function hello() //function definition
{
    alert("alert - hello world!");//popup window    
}

function add()//function definition
{
    var x = 3;
    var y = 5;
    var sum = x + y;
    alert("Sum is " + sum);
}

function substract() {
    var a = 1000;
    var b = 100;
    var diff = a - b;
    alert("Difference is" + diff);
}

function increment() {
    var y = 10;//local scope - resets y everytime function is called
    globalX = globalX + 10;//can add any number to itself
    //y = y+10;
    y += 10;//same as y = y+10;
    alert("x=" + globalX + "y=" + y);

}

/* JS statements
Conditional statements:
If statement
Switch statement
*/

function compare() {
    //var charlie = 120;
    //var john = 120;

    var charlie = prompt("Enter charlie's height");
    var john = prompt("Enter john's height");

    //conditional if statement

    if (charlie > john) {
        alert("Charlie is taller");
    }
    else if (charlie == john)//"=" is assignment; "==" is comparison
    {
        alert("Charlie and John are of the same height");
    }
    else {
        alert("John is taller");
    }

}

function IsTropical(fruit)//fruit is a variable and is an input parameter
{
    var isTropical = false; //boolean variable: True or False

    switch (fruit) {
        case "banana":
            isTropical = true;
            break;

        case "papaya":
            isTropical = true;
            break;

        case "tomato":
            isTropical = false;
            break;

        case "mango":
            isTropical = true;
            break;

        case "watermelon":
            isTropical = true;
            break;

        default:
            isTropical = false;
    }

    alert("Is " + fruit + " tropical?" + isTropical);

}

/*
Loops:
For loop
While loop
Do while loop

Break
*/

function Repeat(message) {
    var counter = 0;
    console.log("While loop:");
    while (counter < 5) {
        console.log(message);
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    }

    counter = 0;
    console.log("Do - While loop:");
    do {
        console.log(message);
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    } while (counter < 5);

    console.log("For loop:");
    /************************************************* */
    for (var counter = 0; counter < 5; counter++) {
        console.log(message);
    }
}

function CountMultiplesFn() {
    var x = prompt("Enter the first number");
    CountMultiples(x);
    var y = prompt("Enter the second number");
    CountMultiples(y);
    var z = prompt("Enter the third number");
    CountMultiples(z);
}
function CountMultiples(num) {
    var totalMultiples = 0;

    for (var i = 1; i <= 100; i++) {
        if (i % num == 0)//This means it is a multiple
            totalMultiples++;
    }
    console.log("Total multiples of " + num + " = " + totalMultiples);
}
function DisplayTriangleWithNRows() {
    var num = prompt("Enter the number of rows for your triangle");
    DisplayTriangle(num);
}
function DisplayTriangle(num) {
    var strRow = "";
    var totalStars = 0;
    for (var i = 1; i <= num; i++) {
        strRow = "";//Reset strRow
        for (var j = 1; j <= i; j++) {
            strRow = strRow + "*";
            totalStars++;
        }
        //Now we have a row. Lets display the row
        console.log(strRow);
    }
    return totalStars;
}

function CountStarsInTriangle() {
    var num = prompt("Enter the number of rows for your triangle");
    var total = DisplayTriangle(num);
    console.log("Total starts in a triangle with " + num + " rows = " + total);
}



function Sum_OF_Odd_Numbers() {
    var sum = 0;
    for (let i = 5; i < 150; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    alert(sum);
}

function Grade() {
    //   <p>(Below 70 is F; 70-79 is C; 80-89 is B and 90 and above is A)</p>
    var prompt_grade = prompt("Please enter the Score: ");
    var grade;

    switch (true) {
        case 70 > prompt_grade:
            grade = "F";
            break;

        case prompt_grade >= 70 && prompt_grade <= 79:
            grade = "C";
            break;

        case prompt_grade >= 80 && prompt_grade <= 89:
            grade = "B";
            break;

        case prompt_grade > 90:
            grade = "A";
            break;

        default:
            grade = "ERROR!!";
    }

    alert("Grade: " + grade);

}


function numberMultiply() {
    var prompt_Number = prompt("Enter the number's height");
    var counter = 0;

    for (let i = 1; i < 200; i++) {
        alert(i + "*" + prompt_Number + "=" + i * prompt_Number);
        counter++;

    }
    alert("Total Numbers: " + counter);

}

function AbTriangle() {


    var rows = prompt("Enter Number of rows: ")
    DisplayTriangle_two(rows);

}
function DisplayTriangle_two(num) {
    var strRow = "";
    for (let i = 1; i <= num; i++) {
       
        if (i % 2 == 0) {
            strRow += "B";
        }{
        strRow += "A";
        
    }
     }
     alert(strRow);
   

}
function countA_B(){
    //   <p>In the above triangle, count the number of As and number of Bs</p>            
    var number=prompt("Enter the raw: ");
    var count_A=0;
    var count_B=0;
   
    for (let i=1;i<=number;i++){
        if(i%2===0){
            count_B+=1;
        }
        else
        {
            count_A+=1;
        }
    }
   alert("A :"+count_A+"    Count B:  "+count_B);
   }