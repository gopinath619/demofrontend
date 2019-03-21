import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeeInvoiceComponent } from './customee-invoice.component';

describe('CustomeeInvoiceComponent', () => {
  let component: CustomeeInvoiceComponent;
  let fixture: ComponentFixture<CustomeeInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomeeInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomeeInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
