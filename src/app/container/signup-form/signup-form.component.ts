import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ImageService } from './../../services/image.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss',
})
export class SignupFormComponent implements OnInit {
  @ViewChild('formComponent', { static: false })
  testhookComponentRef!: ElementRef<HTMLDivElement>;

  imgUrl: string =
    'https://www.timesofsports.com/wp-content/uploads/2021/12/CSK-Logo.png';

  constructor(private imgService: ImageService) {}

  ngOnInit(): void {
    // Subscribe to the observable to listen for image URL changes
    this.imgService.imageUrl$.subscribe((url) => {
      this.imgUrl = url;

      // Scroll to the form component when the image URL changes
      if (this.testhookComponentRef) {
        this.testhookComponentRef.nativeElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    });
  }
}
