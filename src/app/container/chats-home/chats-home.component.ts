import { AfterViewInit, Component } from '@angular/core';
import Split from 'split.js';


@Component({
  selector: 'app-chats-home',
  templateUrl: './chats-home.component.html',
  styleUrl: './chats-home.component.scss'
})
export class ChatsHomeComponent implements AfterViewInit{
  
  ngAfterViewInit(): void {
    Split(['#sidebar', '#main'], {
      sizes: [20, 80],
      minSize: [100, 0],
      gutterSize: 10,
      direction: 'horizontal'
    });
  }

}
