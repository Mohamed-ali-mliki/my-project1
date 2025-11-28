import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationOnlineComponent } from './formation-online.component';

describe('FormationOnlineComponent', () => {
  let component: FormationOnlineComponent;
  let fixture: ComponentFixture<FormationOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormationOnlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
