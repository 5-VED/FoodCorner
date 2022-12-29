import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchItem: string = '';
  constructor(private router: ActivatedRoute, private _routes: Router) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      if (params['searchItem']) this.searchItem = params['searchItem'];
    });
  }

  search(): void {
    if(this.searchItem)
    this._routes.navigateByUrl('/search/' + this.searchItem);
    if(this.searchItem===''){
      this._routes.navigateByUrl('');
    }
  }
}
