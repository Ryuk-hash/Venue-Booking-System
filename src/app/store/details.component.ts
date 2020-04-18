import { Component } from '@angular/core';
import { Cart } from "../model/cart.model";
@Component({
  templateUrl: 'details.component.html',
})
export class DetailsComponent {

  constructor(public cart: Cart) { }

}