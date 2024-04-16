import { Component } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  searchValue: string = '';

  constructor(private searchService: SearchService){}

  navItems = [
    { text: 'Home', url: '/' },
    { text: 'Something', url: '/#' },
    { text: 'Something', url: '/#' },
    { text: 'Profile', url: '/#' },
  ];

  
  
  onSearchClicked(inputEl : HTMLInputElement){
    console.log(inputEl.value);
    this.searchService.updateSearch(inputEl.value);
  }
  
}
