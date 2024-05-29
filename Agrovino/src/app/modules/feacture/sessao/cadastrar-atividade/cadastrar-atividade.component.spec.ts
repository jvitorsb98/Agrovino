import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAtividadeComponent } from './cadastrar-atividade.component';

describe('CadastrarAtividadeComponent', () => {
  let component: CadastrarAtividadeComponent;
  let fixture: ComponentFixture<CadastrarAtividadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrarAtividadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastrarAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
