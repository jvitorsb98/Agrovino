import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPesoComponent } from './editar-peso.component';

describe('EditarPesoComponent', () => {
  let component: EditarPesoComponent;
  let fixture: ComponentFixture<EditarPesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarPesoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarPesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
