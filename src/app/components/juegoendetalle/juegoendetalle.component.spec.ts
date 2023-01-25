import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoendetalleComponent } from './juegoendetalle.component';

describe('JuegoendetalleComponent', () => {
  let component: JuegoendetalleComponent;
  let fixture: ComponentFixture<JuegoendetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoendetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegoendetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
