import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbanerComponent } from './editbaner.component';

describe('EditbanerComponent', () => {
  let component: EditbanerComponent;
  let fixture: ComponentFixture<EditbanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditbanerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditbanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
