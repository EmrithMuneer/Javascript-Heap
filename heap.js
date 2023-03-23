class Heap {
    /**
     * @param {Function} compareFn - Comparator function
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
     * This method add a new value to the queue
     * @param {Any} val
     */
    offer(val) {
        this.#siftUp(this.size++, val);
    }

    /**
     * This method returns and delete the top element from the queue
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
     * This method returns the top element from the queue
     * @returns 
     */
    peek() {
        if(this.isEmpty()) {
            return undefined;
        }
        return this.queue[0];
    }

    isEmpty() {
        return this.size == 0;
    }

    /**
     * 
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
     * 
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
