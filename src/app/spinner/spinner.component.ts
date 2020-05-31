import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Subject } from "rxjs";
import { SpinnerService } from "../spinner.service";
//import { SpinnerService } from '../../util/spinner.service';

@Component({
  selector: "app-spinner",
  templateUrl: "./spinner.component.html",
  styleUrls: ["./spinner.component.css"],
})
export class SpinnerComponent implements OnInit {
  color = "primary";
  mode = "indeterminate";
  value = 50;
  visibility: Subject<boolean> = this.spinnerService.visibility;
  flag: boolean = false;
  constructor(private spinnerService: SpinnerService) {}

  ngOnInit() {
    this.spinnerService.visibility.subscribe((data: boolean) => {
      console.log(data);
      this.flag = data;
    });
  }
}
