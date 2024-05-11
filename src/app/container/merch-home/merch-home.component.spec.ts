import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchHomeComponent } from './merch-home.component';

describe('MerchHomeComponent', () => {
  let component: MerchHomeComponent;
  let fixture: ComponentFixture<MerchHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MerchHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MerchHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
