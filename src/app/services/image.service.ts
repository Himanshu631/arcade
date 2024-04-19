import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ImageService {
  private imageUrlSource = new Subject<string>();
  imageUrl$ = this.imageUrlSource.asObservable();

  updateImageUrl(url: string): void {
    this.imageUrlSource.next(url);
  }
}
