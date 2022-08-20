import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'customer-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  search : String ="";
  Categories = new FormControl('');
  categoriesList: string[] = ['Furniture', 'Materials', 'Clothes', 'Cars', 'Apartment', 'utensilic'];
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
