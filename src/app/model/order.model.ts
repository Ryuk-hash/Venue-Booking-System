import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";
import { Time } from "@angular/common";


@Injectable()
export class Order {
    public id: number;
    public name: string;
    public branch: string;
    public start: Time;
    public end: Time;
    public shipped: boolean = false;

    constructor(public cart: Cart) { }

    clear() {
        this.id = null;
        this.name = null;
        this.branch = null;
        this.start = null;
        this.end = null;
        this.shipped = false;
        this.cart.clear();
    }
}
