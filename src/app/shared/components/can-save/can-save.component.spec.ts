import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanSaveComponent } from './can-save.component';

describe('CanSaveComponent', () => {
  let component: CanSaveComponent;
  let fixture: ComponentFixture<CanSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
