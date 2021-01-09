export class NumbersCollection {
    constructor(public data: number[]) {    }

    // putting get means we do not need to call length as if it were a function --> see line below export. we call it as if it were an array or string
    get length(): number {
        return this.data.length;
    }

    // only need to compare index 0, but include both params to show other devs the purpose of this function (for readibility)
    compare(leftIndex: number, rightIndex: number): boolean {
        // if left side > right side = true, swap them
        return this.data[leftIndex] > this.data[rightIndex]
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand
    }
}

// const exampleCollection = new NumbersCollection([1,2,3]);
// exampleCollection.length;