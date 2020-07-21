<!-- @format -->

# promises

[Javascript hard parts v2, Will Sentance](https://static.frontendmasters.com/resources/2019-09-18-javascript-hard-parts-v2/javascript-hard-parts-v2.pdf)

Promises is a feature that allows asynchornous execution.
What does it mean?
We have normal execution, (synchronicity) -> javascript
And also we have some tasks that are executed besides the normal executions. Features that are not javascript feature. This is the background work. It could be some web browser features, such us the time or a network request.
When a feature is executed on background and it finishes, there should be conexion between this background and the local memory of javascript, so there is a consistency between the data on the background and the data of the javascript global memory.
`Promises` allows us to mapping the background data with the global memory of javascript.
It returns an object with 3 properties:

1. `value`: it is the data that will be sticked into this property when the promises has finished. Initialy, `value` is undefined.

2. `onFulfill`: an `array of callbacks`. It is a hidden property. It is initially empty. It is fulfill with the callbacks to be executed when the promise has finished. When the promised finished, the callback is queued into the `micro-task queue`. The `Event loop` _auto-triggered to run_ with `value` as the argument.

3. `onReject`: an `array of callbacks`. It is a hidden property. It is initially empty. It is fulfill with a callbacks that is executed if the promise fails.

```
promise.then(callback) // ~= promise.onFulfill.push(callbacks)
// promise is queued into micro-task queue
// callback(value) is auto-run
```

> promises, micro-task queue and callback queue allows to build NON-BLOCKING APPLICATION

## Order of Execution:

The order matters...

1. all global code run && call stack
2. once call stack is empty and all global code run, event loop will execute micro-task until it is empty
3. at the end, callback queue will be executed

Prioritize functions in the microtask queue over the Callback queue

## Jack Archibal video

[Javascript microtask quiz](https://www.youtube.com/watch?v=Lum0R6Ng6R8)

1. Microtask is run when tha Javascript stack is empty
2. And promises queue microtasks
