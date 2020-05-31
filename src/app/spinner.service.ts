import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SpinnerService {
  visibility = new Subject<boolean>();
  private spinnerVisibility: boolean = true;

  show() {
    this.visibility.next(true);
  }

  hide() {
    this.visibility.next(false);
  }
  setSpinnerVisibility(spinnerVisibility: boolean) {
    this.spinnerVisibility = spinnerVisibility;
  }
  setDefaultSpinnerVisibility() {
    this.spinnerVisibility = true;
  }
  getSpinnerVisibility() {
    return this.spinnerVisibility;
  }
}
