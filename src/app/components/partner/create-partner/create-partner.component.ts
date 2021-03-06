import { Component, OnInit } from "@angular/core";
import { ResponseModel } from "src/app/models/responseModel";
import { CreatePartnerService } from "src/app/services/createPartner.service";
import { CreatePartnerModel } from "src/app/models/createPartnerModel";
import { AlertService } from 'ngx-alerts';

@Component({
  selector: "app-create-partner",
  templateUrl: "./create-partner.component.html",
  styleUrls: ["./create-partner.component.css"]
})
export class CreatePartnerComponent implements OnInit {
  responseToken= new ResponseModel();
  createPartnerModel = new CreatePartnerModel();
  constructor(private createPartnerService: CreatePartnerService, private alertService: AlertService) { }

  ngOnInit() {
    this.getToken();
  }

  getToken() {
    this.createPartnerService.getToken().subscribe(ussr => {
      this.responseToken = ussr;
      console.log(ussr.data);
    });
  }
  createPartnerFuntion() {
    console.log(this.createPartnerModel.token = this.responseToken.data)
    this.createPartnerService
      .createPartner(this.createPartnerModel)
      .subscribe(result => {
        console.log(result);
        console.log(result.message);
        this.alertService.success(result.message);
        this.createPartnerModel = new CreatePartnerModel();
        this.getToken();
      });
  }
}
