import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesagemBovinosComponent } from '../pesagem-suinos/pesagem-bovinos.component';

describe('PesagemBovinosComponent', () => {
  let component: PesagemBovinosComponent;
  let fixture: ComponentFixture<PesagemBovinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PesagemBovinosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PesagemBovinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
