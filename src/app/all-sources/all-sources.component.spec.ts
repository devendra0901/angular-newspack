import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSourcesComponent } from './all-sources.component';

describe('AllSourcesComponent', () => {
  let component: AllSourcesComponent;
  let fixture: ComponentFixture<AllSourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
