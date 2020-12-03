import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileClaroEditComponent } from './mobile-claro-edit.component';

describe('MobileClaroEditComponent', () => {
  let component: MobileClaroEditComponent;
  let fixture: ComponentFixture<MobileClaroEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileClaroEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileClaroEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
