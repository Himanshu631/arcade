import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ImageService } from "./../../services/image.service";

@Component({
  selector: 'app-testhook',
  templateUrl: './testhook.component.html',
  styleUrls: ['./testhook.component.scss']
})
export class TesthookComponent implements OnInit {
  @ViewChild('formComponent', { static: false }) testhookComponentRef!: ElementRef<HTMLDivElement>;

  imgUrl: string = 'https://www.timesofsports.com/wp-content/uploads/2021/12/CSK-Logo.png';

  constructor(private imgService: ImageService) {}

  ngOnInit(): void {
    // Subscribe to the observable to listen for image URL changes
    this.imgService.imageUrl$.subscribe(url => {
      this.imgUrl = url;

      // Scroll to the form component when the image URL changes
      if (this.testhookComponentRef) {
        this.testhookComponentRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
