import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickarecordComponent } from './pickarecord.component';

describe('PickarecordComponent', () => {
  let component: PickarecordComponent;
  let fixture: ComponentFixture<PickarecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickarecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickarecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
