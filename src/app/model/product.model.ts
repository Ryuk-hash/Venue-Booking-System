import { DatePipe } from "@angular/common";


export class Product {

    constructor(
        public id?: number,
        public name?: string,
        public category?: string,
        public purpose?: string,
        public price?: number,
        public branch?: string,
        public date?: DatePipe) { } 
}
