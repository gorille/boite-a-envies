import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerIconComponent } from './messenger-icon.component';

describe('MessengerIconComponent', () => {
  let component: MessengerIconComponent;
  let fixture: ComponentFixture<MessengerIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessengerIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengerIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
