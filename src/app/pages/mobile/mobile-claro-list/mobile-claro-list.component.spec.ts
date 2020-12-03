import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileClaroListComponent } from './mobile-claro-list.component';

describe('MobileClaroListComponent', () => {
  let component: MobileClaroListComponent;
  let fixture: ComponentFixture<MobileClaroListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileClaroListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileClaroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
