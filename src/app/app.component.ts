import {Component, OnInit, ViewChild} from '@angular/core';
import {ToastContainerDirective, ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild(ToastContainerDirective, {static: true})
  toastContainer: ToastContainerDirective | undefined;
  title = 'Transportation';
  constructor(private toaster: ToastrService) {

  }

  ngOnInit(): void {
    this.toaster.overlayContainer = this.toastContainer;
  }


}
