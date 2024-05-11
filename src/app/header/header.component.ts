import { Component, ElementRef, ViewChild } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  searchValue: string = '';
  isLogIn: boolean = false;

  constructor(private searchService: SearchService){}

  navItems = [
    { text: 'Home', url: '/' },
    { text: 'Chats', url: '/chats' },
    { text: 'Merchandise', url: '/merchandise' },
    { text: 'Profile', url: '/profile' },
  ];

  @ViewChild('searchInput') searchInp : ElementRef;
  
  // onSearchClicked(inputEl : HTMLInputElement){
  //   console.log(inputEl.value);
  //   this.searchService.updateSearch(inputEl.value);
  // }

  onSearchClicked(){
    this.searchService.updateSearch(this.searchInp.nativeElement.value);
  }
  
}
