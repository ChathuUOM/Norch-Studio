import { Component, OnInit } from '@angular/core';
import { IInvoice } from 'src/app/model/invoice.model';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css'],
})
export class InvoiceDetailComponent implements OnInit {
  invoice_id: string = '';
  company_name: string = '';

  from_owner: string = '';
  from_address: string = '';
  issued_date: string = '';
  to_owner: string = '';
  to_address: string = '';
  due_date: string = '';

  invoice_list: IInvoice[] = [];

  constructor() {}

  ngOnInit(): void {
    this.invoice_id = 'NR 00101/08/2023';
    this.company_name = 'Norch Studio';

    this.from_owner = 'Reza Raharjo';
    this.from_address = '4517 Washington Ave. Manchester, Kentucky 39495';
    this.issued_date = '11 March, 2023';

    this.to_owner = 'Ghyan Gundono';
    this.to_address = '1901 Thornridge Cir.Shiloh, Hawaii 81063';
    this.due_date = '16 March, 2023';
  }
}
