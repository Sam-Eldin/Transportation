import {Injectable} from '@angular/core';
import {ActiveToast, ToastrService} from "ngx-toastr";

export enum notificationTypes {
  success, info, warning, error
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private currentNotification: ActiveToast<any> | undefined;

  constructor(private toastrService: ToastrService) {}

  createNotification(type: notificationTypes, message: string, title: string = '', timeout: number = 2000) {
    if (this.currentNotification) {
      this.toastrService.remove(this.currentNotification.toastId);
    }
    switch (type) {
      case notificationTypes.success:
        this.currentNotification = this.toastrService.success(message, title, {timeOut: timeout});
        break;
      case notificationTypes.info:
        this.currentNotification = this.toastrService.info(message, title, {timeOut: timeout});
        break
      case notificationTypes.warning:
        this.currentNotification = this.toastrService.warning(message, title, {timeOut: timeout});
        break;
      case notificationTypes.error:
        this.currentNotification = this.toastrService.error(message, title, {timeOut: timeout});
        break;
    }
  }

  closeNotification() {
    if (this.currentNotification) {
      this.toastrService.remove(this.currentNotification.toastId);
    }
  }
}
