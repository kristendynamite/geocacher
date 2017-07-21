import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGeocacheComponent } from './add-geocache.component';

describe('AddGeocacheComponent', () => {
  let component: AddGeocacheComponent;
  let fixture: ComponentFixture<AddGeocacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGeocacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGeocacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
