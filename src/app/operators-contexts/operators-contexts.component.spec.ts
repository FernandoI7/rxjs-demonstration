import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorsContextsComponent } from './operators-contexts.component';

describe('OperatorsContextsComponent', () => {
  let component: OperatorsContextsComponent;
  let fixture: ComponentFixture<OperatorsContextsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorsContextsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorsContextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
