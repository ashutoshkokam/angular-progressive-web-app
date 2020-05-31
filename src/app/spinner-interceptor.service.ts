import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpResponse } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
import { HttpEvent } from "@angular/common/http";
import { tap, finalize, debounceTime, delay } from "rxjs/operators";
import { SpinnerService } from "./spinner.service";

@Injectable()
export class SpinnerHttpInterceptor implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("Spinner Invoked");
    if (this.spinnerService.getSpinnerVisibility()) {
      console.log("Spinner Show");
      this.spinnerService.show();
    }
    return next.handle(req).pipe(
      delay(1),
      finalize(() => {
        this.spinnerService.hide();
        this.spinnerService.setDefaultSpinnerVisibility();
      })
    );
  }
}
