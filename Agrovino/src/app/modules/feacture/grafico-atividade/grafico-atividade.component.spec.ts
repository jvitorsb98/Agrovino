import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoAtividadeComponent } from './grafico-atividade.component';

describe('GraficoAtividadeComponent', () => {
  let component: GraficoAtividadeComponent;
  let fixture: ComponentFixture<GraficoAtividadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficoAtividadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraficoAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
