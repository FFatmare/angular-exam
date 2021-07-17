import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/category/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  allCats:any
  currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : ''
  constructor(private _cat:CategoriesService) { }

  ngOnInit() {
    this.getAllCategories()
  }


  getAllCategories(){
    this.allCats=[]
    this._cat.getAllCategories()
    .then((res)=>{
      this.allCats=res
    })
    .catch((err)=>{
      console.log(err)
    })
  }

}
