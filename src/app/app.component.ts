import {Component, OnInit, ViewChild} from '@angular/core';
import {ToastContainerDirective, ToastrService} from "ngx-toastr";
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild(ToastContainerDirective, {static: true})
  toastContainer: ToastContainerDirective | undefined;
  title = 'Transportation';
  isLoading: boolean = false;
  constructor(private toaster: ToastrService, private router: Router) {
      this.router.events.subscribe((event) => {
          switch (true) {
            case event instanceof NavigationStart: {
              this.isLoading = true;
              break;
            }

            case event instanceof NavigationEnd:
            case event instanceof NavigationCancel:
            case event instanceof NavigationError: {
              this.isLoading = false;
              break;
            }

            default: break;
          }
      })
  }

  ngOnInit(): void {
    this.toaster.overlayContainer = this.toastContainer;
  }
}
