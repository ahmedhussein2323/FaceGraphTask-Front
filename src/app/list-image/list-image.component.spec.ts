import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListImageComponent } from './list-image.component';

describe('ListUserComponent', () => {
  let component: ListImageComponent;
  let fixture: ComponentFixture<ListImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
