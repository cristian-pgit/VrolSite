import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletebanerComponent } from './deletebaner.component';

describe('DeletebanerComponent', () => {
  let component: DeletebanerComponent;
  let fixture: ComponentFixture<DeletebanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletebanerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletebanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
