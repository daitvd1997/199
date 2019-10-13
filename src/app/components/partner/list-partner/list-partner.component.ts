import { PartnerService } from '../../../services/partner.service';
import { Component, OnInit, ViewChild, Directive} from '@angular/core';
import { PageEvent, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
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
		private partnerService: PartnerService
	) {
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
