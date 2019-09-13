import { Component, OnInit } from '@angular/core';
import { CHEATSHEETS } from '../mock-cheatsheets';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-cheatsheets',
  templateUrl: './cheatsheets.component.html',
  styleUrls: ['./cheatsheets.component.scss'],
})
export class CheatsheetsComponent implements OnInit {
  cheatsheets = CHEATSHEETS;

  selectedProduct: 'Init';

  constructor() {
  }

  onTapProduct(product) {
    console.log(product);
  }

  ngOnInit() {
  }

}
