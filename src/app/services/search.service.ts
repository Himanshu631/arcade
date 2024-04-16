import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SearchService {
    private serachSubject = new BehaviorSubject<string>('');
    search$ = this.serachSubject.asObservable();

    updateSearch(value: string){
        this.serachSubject.next(value);
    }
}