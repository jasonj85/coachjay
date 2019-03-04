import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

  confirm(message: string, okCallBack: () => any) {
    alertify.confirm(message, e => {
      if (e) {
        okCallBack();
      } else {}
    });
  }

  // display success message
  success(message: string) {
    alertify.success(message);
  }

  // display error message
  error(message: string) {
    alertify.error(message);
  }

  // display warning message
  warning(message: string) {
    alertify.warning(message);
  }

  // display standard message
  message(message: string) {
    alertify.message(message);
  }


}
