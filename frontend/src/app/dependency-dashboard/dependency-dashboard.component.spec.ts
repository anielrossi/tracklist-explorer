import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyDashboardComponent } from './dependency-dashboard.component';

describe('DependencyDashboardComponent', () => {
  let component: DependencyDashboardComponent;
  let fixture: ComponentFixture<DependencyDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependencyDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependencyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
