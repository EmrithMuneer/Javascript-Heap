# Javascript-Heap
This library is an implementation of the popular Java PriorityQueue class. The element of the priority queue are ordered according to their natural ordering or by a comparator. The queue does not allow insertion of null/undefined values

# Installation & Usage
Download the library from the github or copy paste the code in a file and save it in your working folder as heap.js. Then include it in your project.

```html
<html>
    <script src="heap.js"></script>
<html>
```

### List of Methods
| Methods           | Description |
|-------------------|-------------|
| offer | Inserts the specified element into the priority queue. Throws **NullPointerException** if value is *null* |
| poll | Retrieves and removes the head of the queue, or returns *null* if queue is empty |
| peek | Retrieves, but does not remove, the head of the queue, or returns *null* if queue is empty |
| isEmpty | Returns *true* if the queue is empty |
| size | Returns the number of elements in the queue |


### Intitialise a new Priority Queue
```javascript
var pq = new Heap();
```
The queue will be sorted according to their natural order i.e ascending unless provided with a comparator. Comparator should return a negative value if `a` is smaller than `b`, 0 if both are equal and a positive value if `a` is greater than `b`.
```javascript
var pq = new Heap((a, b) => {
    // sorting in ascending order (default)
    return a - b;
});

var pq = new Heap((a, b) => {
    // sorting in descending order
    return b - a;
});
```

### Adding to the queue
```javascript
var pq = new Heap();
pq.offer(45);
pq.offer(23);
pq.offer(28);
pq.offer(60);
```

### Removing from the queue
```javascript
pq.poll() // returns 23
```

# Using comparators
### Multi dimensional Array
```javascript
// Initialise priority queue to sort a 2D Array in descending order
var pq = new Heap((a, b) => {
    return a[0] == b[0] ? b[1] - a[1] : b[0] - a[0];
});
pq.offer([3,4]);
pq.offer([8,3]);
pq.offer([1,7]);
pq.offer([1,3]);

// display values
while(!pq.isEmpty()) {
    console.log(pq.poll());
}
// Print
// [ 8, 3 ]
// [ 3, 4 ]
// [ 1, 7 ]
// [ 1, 3 ]
```

### Array of objects
```javascript
var obj = [
    {name:'Paul', penalty:45},
    {name:'John', penalty:67},
    {name:'Mary', penalty:24}
];
var pq = new Heap((a, b) => {
    return a.penalty - b.penalty; // ascending order
});
obj.forEach(o => {
    pq.offer(o);
});
// print queue
while(!pq.isEmpty()) {
    console.log(pq.poll());
}
// Print
// { name: 'Mary', penalty: 24 }
// { name: 'Paul', penalty: 45 }
// { name: 'John', penalty: 67 }
```
