import { Component, OnInit } from "@angular/core";
import { ResponseModel } from "src/app/models/responseModel";
import { AlertService } from 'ngx-alerts';
import { CreateNewPortModel } from 'src/app/models/createNewPortModel';
import { CreateNewPortService } from 'src/app/services/createNewPort.serice';

@Component({
  selector: 'app-config-partner',
  templateUrl: './config-partner.component.html',
  styleUrls: ['./config-partner.component.css']
})
export class ConfigPartnerComponent implements OnInit {
  responseToken: ResponseModel;
  createNewPortModel = new CreateNewPortModel();
  constructor(private createPartnerService: CreateNewPortService, private alertService: AlertService) { }


  ngOnInit() {
  }

  createNewPortFuntion() {
    this.createPartnerService
      .createNewPort(this.createNewPortModel)
      .subscribe(result => {
        console.log(result);
        console.log(result.message);
        this.alertService.success(result.message);
        this.createNewPortModel = new CreateNewPortModel();
      });
  }

  // getAllPort(): void {
  //   // tslint:disable-next-line: no-shadowed-variable
  //   this.dashboardservice.getAllHistory().subscribe((res: any[]) => {
  //     this.listResponseHistory = res.listModel;
  //     console.log(res.listModel);
  //   });
  // }
}
