import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoriesService } from 'src/app/shared/category/categories.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  categoryName=''
  @Output() refresh: EventEmitter<any> = new EventEmitter();
  constructor(private _cat:CategoriesService) { }

  ngOnInit() {
  }

  createCategory(){
    this._cat.AddCategory({name:this.categoryName})
    .then((res)=>{
      console.log(res)
      this.refresh.emit()
    })
    .catch((err)=>{
      console.log(err)
    })
  }

}
