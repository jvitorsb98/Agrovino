import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPesoComponent } from './cadastrar-peso.component';

describe('CadastrarPesoComponent', () => {
  let component: CadastrarPesoComponent;
  let fixture: ComponentFixture<CadastrarPesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrarPesoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastrarPesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
