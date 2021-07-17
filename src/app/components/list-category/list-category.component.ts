import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {
  @Input() categories:any
  allCats:any
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    if(this.categories){
      this.allCats=this.categories
    }
  }
}
