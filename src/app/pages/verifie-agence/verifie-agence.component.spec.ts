import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifieAgenceComponent } from './verifie-agence.component';

describe('VerifieAgenceComponent', () => {
  let component: VerifieAgenceComponent;
  let fixture: ComponentFixture<VerifieAgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifieAgenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifieAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
