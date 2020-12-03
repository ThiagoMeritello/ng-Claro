import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileClaroComponent } from './mobile-claro.component';

describe('MobileClaroComponent', () => {
  let component: MobileClaroComponent;
  let fixture: ComponentFixture<MobileClaroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileClaroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileClaroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
