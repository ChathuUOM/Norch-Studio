import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { ICurrency } from 'src/app/model/currency.model';
import { IInvoiceFormData } from 'src/app/model/invoice-form-data.model';
import { IInvoice } from 'src/app/model/invoice.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.css'],
})
export class CreateInvoiceComponent implements OnInit {
  invoice_id: string = '';
  invoiceData!: IInvoiceFormData;
  currencyList: ICurrency[] = [];

  invoice_list: IInvoice[] = [];
  new_inv!: IInvoice;
  grand_total: number = 0;

  constructor(private currencyPipe: CurrencyPipe, private router: Router) {
    this.invoiceData = {} as IInvoiceFormData;
  }

  ngOnInit(): void {
    this.invoice_id = 'NR 00101/08/2023';
    this.currencyList = [
      { value: 1, label: 'NOK' },
      { value: 2, label: 'LKR' },
      { value: 3, label: 'EUR' },
      { value: 4, label: 'SGD' },
      { value: 5, label: 'AUD' },
    ];

    // For table
    this.invoice_list = [
      {
        id: 1,
        description: 'First Page',
        price: 200,
        qty: 2,
        total_amount: 0,
      },
      {
        id: 2,
        description: 'Second Page',
        price: 800,
        qty: 5,
        total_amount: 0,
      },
      {
        id: 3,
        description: 'Third Page',
        price: 500,
        qty: 2,
        total_amount: 0,
      },
    ];
    this.calculateTotal();
    // this.getFormattedPrice();
  }

  invoiceForm = new FormGroup({
    bill_from: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    bill_to: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    title: new FormControl('', Validators.required),
    currency: new FormControl(''),
  });

  get f() {
    return this.invoiceForm.controls;
  }

  submit() {
    console.log(this.invoiceForm.value);
  }

  // Format price for total amount calculation
  getFormattedPrice(item?: IInvoice) {
    this.invoice_list.forEach((obj) => {
      if (item) {
        if (!item.price.startsWith('$')) {
          if (obj.id === item.id) {
            obj.price =
              this.currencyPipe.transform(item.price, 'USD', 'symbol') || '';
          }
        }
      } else {
        obj.price =
          this.currencyPipe.transform(obj.price, 'USD', 'symbol') || '';
      }
    });
  }

  // Calculate total amount of the invoice table
  calculateTotal(): void {
    this.grand_total = 0;
    for (const item of this.invoice_list) {
      if (typeof item.price !== 'number') {
        let updatedPrice = item.price.substring(1);
        let updatedPriceNumber: number = parseFloat(updatedPrice);

        item.total_amount = updatedPriceNumber * item.qty;
        this.grand_total += item.total_amount;
      } else {
        item.total_amount = item.price * item.qty;
        this.grand_total += item.total_amount;
      }
    }
  }

  // On table data update
  onCellValueChange(): void {
    this.calculateTotal();
  }

  // Add a new row
  addRow(): void {
    this.new_inv = {
      id: this.invoice_list.length + 1,
      description: '',
      price: 0,
      qty: 0,
      total_amount: 0,
    };
    this.invoice_list.push(this.new_inv);
    console.log('invoice_list', this.invoice_list);
  }

  // Adding navigation for detail page
  navigateTo(route: string): void {
    window.open(route, '_blank');
  }
}
