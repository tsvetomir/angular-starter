import { OnInit } from '@angular/core';
import { BaseComponent } from '../../../core/decorators/base.component';

@BaseComponent({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.css']
})
export class HomeComponent implements OnInit {
  private counter: number;
  private message: string;
  private gridData: any[] = [{
    "ProductID": 1,
    "ProductName": "Chai",
    "UnitPrice": 18.0000,
    "Discontinued": true
  }, {
    "ProductID": 2,
    "ProductName": "Chang",
    "UnitPrice": 19.0000,
    "Discontinued": false
  }, {
    "ProductID": 3,
    "ProductName": "Aniseed Syrup",
    "UnitPrice": 10.0000,
    "Discontinued": false
  }, {
    "ProductID": 4,
    "ProductName": "Chef Anton's Cajun Seasoning",
    "UnitPrice": 22.0000,
    "Discontinued": false
  }, {
    "ProductID": 5,
    "ProductName": "Chef Anton's Gumbo Mix",
    "UnitPrice": 21.3500,
    "Discontinued": false
  }, {
    "ProductID": 6,
    "ProductName": "Grandma's Boysenberry Spread",
    "UnitPrice": 25.0000,
    "Discontinued": false
  }];

  constructor() {}

  ngOnInit() {
    this.counter = 42;
    this.updateMessage();
  }

  updateCounter() {
    this.counter--;
    this.updateMessage();
  }

  private updateMessage() {
    if (this.counter <= 0) {
      this.message = 'Hoorraaay! You unlocked the NativeScript clicker achievement!';
    } else {
      this.message = `${this.counter} taps left`;
    }
  }
}
