import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSecoesComponent } from './listar-secoes.component';

describe('ListarSecoesComponent', () => {
  let component: ListarSecoesComponent;
  let fixture: ComponentFixture<ListarSecoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarSecoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarSecoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
