import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroBovinoComponent } from '../cadastro-suino/cadastro-bovino.component';

describe('CadastroBovinoComponent', () => {
  let component: CadastroBovinoComponent;
  let fixture: ComponentFixture<CadastroBovinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroBovinoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroBovinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
