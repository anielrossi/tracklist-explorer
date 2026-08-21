import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyDashboardComponent } from './dependency-dashboard.component';

declare function describe(description: string, specDefinitions: () => void): void;
declare function beforeEach(action: () => void | Promise<void>): void;
declare function it(description: string, testFunction: () => void | Promise<void>): void;
declare function expect<T>(actual: T): { toBeTruthy(): void };

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
