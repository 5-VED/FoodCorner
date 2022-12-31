import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Tags } from '../shared/models/tags';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
  tagList: Tags[] = [];

  constructor(private fs: FoodService, private _router: Router) {}

  ngOnInit(): void {
    this.tagList = this.fs.getAllTags();
  }


}
