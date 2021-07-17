import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : ''
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    console.log(this.currentUser)
  }

}
