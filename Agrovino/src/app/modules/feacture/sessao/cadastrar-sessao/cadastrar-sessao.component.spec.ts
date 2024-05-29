import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarSessaoComponent } from './cadastrar-sessao.component';

describe('CadastrarSessaoComponent', () => {
  let component: CadastrarSessaoComponent;
  let fixture: ComponentFixture<CadastrarSessaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrarSessaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastrarSessaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
