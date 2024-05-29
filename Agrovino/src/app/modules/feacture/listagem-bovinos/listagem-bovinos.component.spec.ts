import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemBovinosComponent } from '../listagem-suinos/listagem-bovinos.component';

describe('ListagemBovinosComponent', () => {
  let component: ListagemBovinosComponent;
  let fixture: ComponentFixture<ListagemBovinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListagemBovinosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListagemBovinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
