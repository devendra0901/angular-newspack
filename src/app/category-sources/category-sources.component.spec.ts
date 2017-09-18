import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySourcesComponent } from './category-sources.component';

describe('CategorySourcesComponent', () => {
  let component: CategorySourcesComponent;
  let fixture: ComponentFixture<CategorySourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorySourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
