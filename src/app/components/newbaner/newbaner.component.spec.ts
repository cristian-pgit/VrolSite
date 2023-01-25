import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbanerComponent } from './newbaner.component';

describe('NewbanerComponent', () => {
  let component: NewbanerComponent;
  let fixture: ComponentFixture<NewbanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewbanerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewbanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
