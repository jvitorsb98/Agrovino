import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarSecaoComponent } from './finalizar-secao.component';

describe('FinalizarSecaoComponent', () => {
  let component: FinalizarSecaoComponent;
  let fixture: ComponentFixture<FinalizarSecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinalizarSecaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinalizarSecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
