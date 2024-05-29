import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarBovinoComponent } from '../editar-suino/editar-bovino.component';

describe('EditarBovinoComponent', () => {
  let component: EditarBovinoComponent;
  let fixture: ComponentFixture<EditarBovinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarBovinoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarBovinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
