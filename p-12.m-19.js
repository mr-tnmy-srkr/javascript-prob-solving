/* 1) Write a function called foo() which prints "foo" and
      a function called bar() which prints "bar". 
      Call function bar() in the foo() function after printing. 
      What will be the output? Now call the foo() to see the output. */

// ------------------------------------------------------------------------

function foo(){
   console.log("foo");
   bar();
}

function bar(){
    console.log("bar");
    foo();
}
foo();
bar();
// It will then go into an infinity loop
/* foo
bar
foo
bar
foo
bar
foo
...
...
...
... */