import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UntypedFormControl} from "@angular/forms";
import {IOptions} from "../common/options.interface";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'customer-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  search: string = "";
  Categories = new UntypedFormControl('');
  categoriesList: string[] = ['Furniture', 'Office', 'Apartment','Factory', 'Container'];

  @Output() optionsEventEmitter: EventEmitter<IOptions> = new EventEmitter();

  options: IOptions;
  arrowDirection: string = 'arrow_upward';

  constructor() {
    this.options = {
      options: [],
      sortAsc: true,
      search: '',
    };
    this.optionsEventEmitter.emit(this.options);
  }

  ngOnInit(): void {
  }

  setSortBy(_: any) {
    const downward = this.arrowDirection === 'arrow_downward';
    this.options.sortAsc = downward;
    this.arrowDirection = downward ? 'arrow_upward' : 'arrow_downward';
    this.optionsEventEmitter.emit(this.options);
  }

  changeCategory(event: MatSelectChange) {
    this.options.options = event.value;
    this.optionsEventEmitter.emit(this.options);

  }
  // changeCategory(event: MatSelectChange) {
  //     console.log("hello jimmy");
  //     this.options.option = event.value;
  //     this.optionsEventEmitter.emit(this.options);
  //   }
  setSearch(_: Event) {
    this.options.search = this.search;
    this.optionsEventEmitter.emit(this.options);
  }
}
