<!-- @format -->

# Asynchronicity

> Javascript theory model:

Javascript is a language that is designed with synchrous feature. That means that each line of code has an specific order. Next line of code is not going to execute until the line before hasn't finished.

But what happend with this execution ?

```
1.      setTimeout(() => console.log('Me second!'), 0);
2.      console.log('Me first')
```

In this case, `Me first!` will be printed first, and then `Me second!`.
In this case, we have two important things:

1. `setTimeout` is not within Javascript specification, it is a Web browser feature! So this function will be in a queue called `callback queue`
2. `Event loop`: There is a `callback queue`, where all web browser feature is queue. In what order are they executed?

- first: each element of the `call stack` of the global execution context
- second: each element of the `callback queue`
