<!-- @format -->

# Notes

## closure introduction

1. `scope property`: the rules applies at any line of code that especifies what data is availabel.

2. `JS scope`: lexical or static scoping

3. `static scope`: it referes to the phisical position; where the function is saved, determines what data I have access to.

# possible medium story

differences between the first function and the second:

```
function createFunctionPrinter(input) {
  return function () {
    console.log(input);
  };
}
```

```
function createFunctionPrinter(input) {
  return function (input) {
    console.log(input);
  };
}
```
