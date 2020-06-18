import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../services/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../../models/category';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  category: Category = {id: 1, name: 'food', description: 'd'};
  temp;
  nName;
  nDescription;
  constructor(private categoryService: CategoryService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.temp = this.categoryService.getCategory(params.get('id'));
      if (this.temp) {
        this.category = this.temp;
        this.nName = this.category.name;
        this.nDescription = this.category.description;
      } else {
        this.router.navigate(['categories']);
      }
    });

  }
  editCategory() {
    this.categoryService.editCategory(this.category, this.nName, this.nDescription);
    // TODO show message category was edited or you have already had category with name ...
  }
}
