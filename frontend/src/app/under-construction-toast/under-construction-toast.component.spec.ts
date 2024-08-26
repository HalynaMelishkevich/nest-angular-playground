import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderConstructionToastComponent } from './under-construction-toast.component';

describe('UnderConstructionToastComponent', () => {
  let component: UnderConstructionToastComponent;
  let fixture: ComponentFixture<UnderConstructionToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderConstructionToastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderConstructionToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
