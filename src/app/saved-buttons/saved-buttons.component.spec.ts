import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedButtonsComponent } from './saved-buttons.component';

describe('SavedButtonsComponent', () => {
  let component: SavedButtonsComponent;
  let fixture: ComponentFixture<SavedButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
