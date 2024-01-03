// If you have a function that generate random number between 1 to 5 how could u generate random number 1 to 7 by using that function?

function rand5(){
    return 1 + Math.random() * 4;
 }
 
 function rand7(){
   return 5 + rand5() / 5 * 2;
 }

 console.log(rand7()); //6.442204717996768 ,, 5.625108673217566