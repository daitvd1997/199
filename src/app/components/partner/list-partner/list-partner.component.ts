import { PartnerService } from '../../../services/partner.service';
import { Component, OnInit, ViewChild, Directive, ElementRef, ViewContainerRef, Renderer2 } from '@angular/core';
import { PageEvent, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';
@Component({
	selector: 'app-list-partner',
	templateUrl: './list-partner.component.html',
	styleUrls: ['./list-partner.component.css'],
})
@Directive({
  selector: '[style-paginator]'
})
export class ListPartnerComponent implements OnInit {
	listData: MatTableDataSource<any>;
	displayedColumns: string[] = ['ID', 'NAME', 'RATE', 'PHONE', 'TOKEN', 'URL_CALL_BACK', 'TYPE', 'ACTIONS'];
	@ViewChild(MatSort, { static: false })
	sort: MatSort;
	@ViewChild(MatPaginator, { static: false })
	paginator: MatPaginator;
	searchKey: string;

	pageOption = [5, 10, 25, 100];
	page = 0;
	pageSize = 25;
	length = 0;
	pageEvent: PageEvent;
	constructor(
		private partnerService: PartnerService,
		private alertService: AlertService,
		private router: Router,
		private elRef: ElementRef,
		private vr: ViewContainerRef,
		private ren: Renderer2
	) {
		setTimeout(() => {
			let nodeArray = vr.element.nativeElement.childNodes[0].childNodes[0].childNodes[1].childNodes;
			let button = this.ren.createElement('button');
			this.ren.addClass(button, 'mat-mini-fab');
			this.ren.setAttribute(button, 'onclick', 'alert("test")');
			let span = this.ren.createElement('span');
			this.ren.addClass(span, 'mat-button-wrapper');
			this.ren.appendChild(button, span);
			this.ren.insertBefore(
				vr.element.nativeElement.childNodes[0].childNodes[0].childNodes[1],
				button,
				nodeArray[nodeArray.length - 2]
			);

			let buttonArray = [];
			for (let i = 0; i < nodeArray.length; i++) {
				if (nodeArray[i].nodeName === 'BUTTON') {
					buttonArray.push(nodeArray[i]);
				}
			}

			for (let i = 0; i < buttonArray.length; i++) {
				if (i === 0 || i === buttonArray.length - 1) {
					this.ren.setStyle(buttonArray[i], 'background-color', 'rgba(255, 0, 0, 1)');
					this.ren.setStyle(buttonArray[i], 'color', 'white');
				}
				if (i != 0 && i != buttonArray.length - 1) {
					if (buttonArray[i].childNodes.length > 1) {
						this.ren.removeChild(buttonArray[i].childNodes[0], buttonArray[i].childNodes[0].childNodes[0]);
					}
					const text = this.ren.createText(buttonArray[i]);
					this.ren.appendChild(buttonArray[i].childNodes[0], text);
				}
				if (buttonArray[i].className === 'mat-paginator-range-label') {
					this.ren.removeChild(buttonArray, buttonArray[i]);
				}
				if (buttonArray[i].nodeName === 'BUTTON') {
					this.ren.removeClass(buttonArray[i], 'mat-icon-button');
					this.ren.addClass(buttonArray[i], 'mat-mini-fab');
					this.ren.setStyle(buttonArray[i], 'margin', '2%');
					this.ren.setStyle(buttonArray[i].childNodes[0], 'padding', '0');
					this.ren.setStyle(buttonArray[i].childNodes[0], 'display', 'block');
				}
			}
		});
	}
	ngOnInit() {
		this.loadTable();
	}
	onSearchClear() {
		this.searchKey = '';
		this.applyFilter();
	}

	loadTable() {
		this.listData = null;
		this.partnerService.getAll(this.page, this.pageSize).subscribe(partner => {
			console.log(partner.data);
			this.listData = new MatTableDataSource(partner.data);
			this.listData.sort = this.sort;
		});
		this.partnerService.getCount().subscribe(length => {
			this.length = +length;
		});
	}

	applyFilter() {
		this.listData.filter = this.searchKey.trim().toLowerCase();
	}

	getServerData(event?: PageEvent) {
		this.pageSize = event.pageSize;
		this.page = event.pageIndex;
		this.loadTable();
	}
}
