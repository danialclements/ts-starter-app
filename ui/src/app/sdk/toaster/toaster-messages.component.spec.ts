import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToasterMessagesComponent } from './toaster-messages.component';

describe('ToasterMessagesComponent', () => {
  let component: ToasterMessagesComponent;
  let fixture: ComponentFixture<ToasterMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToasterMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToasterMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
