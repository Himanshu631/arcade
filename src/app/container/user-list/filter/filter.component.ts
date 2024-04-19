import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input()
  allTeams: number;
  @Input()
  winners: number;
  @Input()
  nonWinners: number;

  filters: { text: string; value: any }[] = [];

  ngOnInit(): void {
    this.filters = [
      { text: 'All Teams', value: this.allTeams },
      { text: 'Winners', value: this.winners },
      { text: 'Non-Winners', value: this.nonWinners }
    ];
  }

  selectedFilter: string = 'All Teams';

  @Output()
  selectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();

  onSelectedFilterRadioButtonChanged(): void {
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilter);
  }
}
