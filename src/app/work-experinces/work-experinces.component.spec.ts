import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperincesComponent } from './work-experinces.component';

describe('WorkExperincesComponent', () => {
  let component: WorkExperincesComponent;
  let fixture: ComponentFixture<WorkExperincesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkExperincesComponent]
    });
    fixture = TestBed.createComponent(WorkExperincesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
