import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummayComponent } from './summay.component';

describe('SummayComponent', () => {
  let component: SummayComponent;
  let fixture: ComponentFixture<SummayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
