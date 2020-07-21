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

function substract()
{
    var a = 1000;
    var b = 100;
    var diff = a - b;
    alert("Difference is" + diff);
}

//Homework Lab- Complete Multiplication and Division functionality

function increment()
{ 
    var y = 10;//local scope - resets y everytime function is called
    globalX = globalX+10;//can add any number to itself
    //y = y+10;
    y+=10;//same as y = y+10;
    alert("x="+globalX + "y="+y); 

}

function compare()
{
    var charlie = 120;
    var john = 120;
    
    //conditional if statement
    
    if (charlie > john)
    {
        alert("Charlie is taller");
    }
    else if( charlie == john)//"=" is assignment; "==" is comparison
    {
        alert("Charlie and John are of the same height");
    }
    else
    {
        alert("John is taller");
    }
}
function multiply()
{ // multiply 25 by 42. The answer is 
    var x = 25; 
    var  y= 42; 
    var sum=x*y;
    alert("The Answer Is: "+sum); 

}

function pencilForEachKid()
{

    //48 pencils among 12 kids

    var pencils =48;
    var numberofKids=12;

    var answer =pencils/numberofKids;
    alert("Each kid will get : "+answer+" Pensils!"); 
}

//alculate the 'mean' of these numbers: 25,47,98,46,52 (Add all numbers and divide by 5)
function meanCalc(){
    var sum= 25+47+98+46+5;
    var mean =sum/5;
    alert("Mean of given numbers is "+mean); 

}
function Comparing(){
  //  Is 100 greater than 1000? ("Yes or No")
    var x =100;
    var y = 1000;

    if(x>y){
        alert("Yes!");
    }
    else
    {
        alert("No!");
    }

}

function Comparing_Two(){
    //            <p>Is 5 times 4 greater than 20? ("Yes or No")</p>

    var x = 5*4;
    if(x>20){
        alert("Yes!");
    }
    else{
        alert("No!");
    }
}