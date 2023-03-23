class Heap {
    /**
     * @param {Function} compareFn - Comparator function
     * The comparator is used to order the elements in the queue
     */
    constructor(compareFn) {
        this.queue = [];
        this.size = 0;
        this.compareFn = compareFn || 
        // default comparator function
        function(a, b) {
            return a - b;
        }
    }

    /**
     * @param {Any} val
     * Inserts the specified element into this priority queue. Throws null pointer exception if value is null
     */
    offer(val) {
        if(val == undefined) {
            throw('NullPointerException')
        }
        this.#siftUp(this.size++, val);
    }

    /**
     * Retrieves and removes the head of the queue, or returns null if queue is empty
     */
    poll() {
        if(this.isEmpty()) {
            return null;
        }
        var res = this.queue[0];
        var v = this.queue[--this.size];
        // free space
        this.queue[this.size] = undefined;

        if(this.size > 0) {
            this.#siftDown(v);
        }
        return res;
    }

    /**
     * Retrieves, but does not remove, the head of the queue, or returns null if queue is empty
     */
    peek() {
        if(this.isEmpty()) {
            return undefined;
        }
        return this.queue[0];
    }

    /**
     * Returns true if the queue is empty
     */
    isEmpty() {
        return this.size == 0;
    }

    /**
     * Returns the number of elements in the queue
     */
    size() {
        return this.size;
    }

    /**
     * Private method
     * siftUp swaps a node that is too large with its parent until it is not larger than the node above it
     * @param {int} x - index where the new element goes in
     * @param {Any} v - value
     */
    #siftUp(x, v) {
        var q = this.queue;

        while(x > 0) {
            var p = (x - 1) >> 1;
            if(this.compareFn(q[p], v) <= 0) {
                break;
            }
            this.queue[x] = q[p];
            x = p;
        }
        this.queue[x] = v;
    }

    /**
     * Private method
     * siftDown swaps the node that is too small with its largest child until it is at least as large as both nodes below it
     * @param {Any} v - value
     */
    #siftDown(v) {
        var q = this.queue;
        var n = this.size, h = n >> 1;
        var x = 0;
        while(x < h) {
            var c = (x << 1) + 1;
            if(c + 1 < n && this.compareFn(q[c + 1], q[c]) <= 0) {
                c = c + 1;
            }
            if(this.compareFn(v, q[c]) <= 0) {
                break;
            }
            this.queue[x] = q[c];
            x = c;
        }
        this.queue[x] = v;
    }
}
