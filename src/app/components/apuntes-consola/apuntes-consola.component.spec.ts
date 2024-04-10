import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApuntesConsolaComponent } from './apuntes-consola.component';

describe('ApuntesConsolaComponent', () => {
  let component: ApuntesConsolaComponent;
  let fixture: ComponentFixture<ApuntesConsolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApuntesConsolaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApuntesConsolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
