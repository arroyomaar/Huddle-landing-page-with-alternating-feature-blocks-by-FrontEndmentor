import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManyComponent } from './many.component';

describe('ManyComponent', () => {
  let component: ManyComponent;
  let fixture: ComponentFixture<ManyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
