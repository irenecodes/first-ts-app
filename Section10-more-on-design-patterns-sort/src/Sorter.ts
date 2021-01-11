// to make abstract class, add abstract keyword to class definition, mention will have methods that WILL be created in future 
export abstract class Sorter {
    abstract compare(leftIndex: number, rightIndex: number): boolean;
    abstract swap(leftIndex: number, rightIndex: number): void;
    abstract length: number;

    
    sort(): void {
        const {length} = this;
        // this.collection.indexOf

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - 1 - 1; j++) {
                if(this.compare(j, j+ 1)) {
                    this.swap(j, j +  1);
                }
            }
        }
    }
}