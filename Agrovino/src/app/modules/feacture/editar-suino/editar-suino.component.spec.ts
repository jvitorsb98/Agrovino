import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSuinoComponent } from './editar-suino.component';

describe('EditarSuinoComponent', () => {
  let component: EditarSuinoComponent;
  let fixture: ComponentFixture<EditarSuinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarSuinoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarSuinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
