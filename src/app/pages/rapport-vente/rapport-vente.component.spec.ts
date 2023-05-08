import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportVenteComponent } from './rapport-vente.component';

describe('RapportVenteComponent', () => {
  let component: RapportVenteComponent;
  let fixture: ComponentFixture<RapportVenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportVenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
