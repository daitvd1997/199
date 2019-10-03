import { CreatePartnerModel } from 'src/app/models/createPartnerModel';
import { Component, OnInit } from '@angular/core';
import { CreatePartnerService } from 'src/app/services/createPartner.service';
import { AlertService } from 'ngx-alerts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-partner',
  templateUrl: './edit-partner.component.html',
  styleUrls: ['./edit-partner.component.css']
})
export class EditPartnerComponent implements OnInit {
  createPartnerModel : CreatePartnerModel;
  id = 0;
  constructor(private createPartnerService: CreatePartnerService, private alertService: AlertService
              ,private route: ActivatedRoute) { }

  ngOnInit() {
    this.id =+ this.route.snapshot.paramMap.get('id');
    this.getData();
  }

  getData() {
    this.createPartnerService.getPartnerById(this.id).subscribe(response => {
        console.log(response.data);
        this.createPartnerModel = response.data;
    });
  }

  update() {
    this.createPartnerService.updatePartner(this.createPartnerModel).subscribe(respone => {
      this.alertService.info(respone.message);
      this.getData();
    });
  }
}
