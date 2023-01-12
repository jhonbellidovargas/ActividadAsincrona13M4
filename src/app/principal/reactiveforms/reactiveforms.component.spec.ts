import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformsComponent } from './reactiveforms.component';

describe('ReactiveformsComponent', () => {
  let component: ReactiveformsComponent;
  let fixture: ComponentFixture<ReactiveformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
