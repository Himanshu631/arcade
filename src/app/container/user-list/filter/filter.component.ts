import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit {
  @Input()
  All: number;
  @Input()
  India: number;
  @Input()
  USA: number;

  filters: { text: string; value: number }[] = [];

  ngOnInit(): void {
    this.filters = [
      { text: 'All', value: this.All },
      { text: 'India', value: this.India },
      { text: 'USA', value: this.USA }
    ];
  }

  selectedFilter: string = 'All';

  @Output()
  selectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>;

  onSelectedFilterRadioButtonChanged(){
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilter);
  }

}
