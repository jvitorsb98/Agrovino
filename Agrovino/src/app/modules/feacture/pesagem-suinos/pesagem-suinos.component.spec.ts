import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesagemSuinosComponent } from './pesagem-suinos.component';

describe('PesagemSuinosComponent', () => {
  let component: PesagemSuinosComponent;
  let fixture: ComponentFixture<PesagemSuinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PesagemSuinosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PesagemSuinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
