import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSurMesureComponent } from './dialog-sur-mesure.component';

describe('DialogSurMesureComponent', () => {
  let component: DialogSurMesureComponent;
  let fixture: ComponentFixture<DialogSurMesureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSurMesureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSurMesureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
