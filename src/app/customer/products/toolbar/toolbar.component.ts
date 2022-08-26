import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {IOptions} from "../common/options.interface";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'customer-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  search: string = "";
  Categories = new FormControl('');
  categoriesList: string[] = ['Furniture', 'Office', 'Apartment','Factory', 'Container'];

  @Output() optionsEventEmitter: EventEmitter<IOptions> = new EventEmitter();

  options: IOptions;

  constructor() {
    this.options = {
      options: [],
      sortAsc: true,
      search: ''
    };
    this.optionsEventEmitter.emit(this.options);
  }

  /* budget*/
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

  ngOnInit(): void {
  }

  setSortBy(event: any) {
    let optionText = event.target.value;
    this.options.sortAsc = optionText === 'l2h';
    this.optionsEventEmitter.emit(this.options);
  }

  changeCategory(event: MatSelectChange) {
    this.options.options = event.value;
    this.optionsEventEmitter.emit(this.options);
  }

  setSearch(_: Event) {
    this.options.search = this.search;
    this.optionsEventEmitter.emit(this.options);
  }
}
