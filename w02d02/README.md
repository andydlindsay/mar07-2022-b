# W02D02 - Asynchronous Control Flow

### To Do
* [x] Blocking Code
* [x] Asynchronous Programming
* [x] `setTimeout` and `setInterval`
* [x] File System Functions (`fs`)


### Async vs Sync
* all of the code written so far
* a line of code executes after the one above is done
* async code gets out the way of the normal flow


```js
const name = 'Alice';
console.log(name);
```


```js
// nested setTimeout
setTimeout(() => {
  setTimeout(() => {}, 2000);
}, 2000);
```















