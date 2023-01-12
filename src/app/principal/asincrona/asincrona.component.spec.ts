import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsincronaComponent } from './asincrona.component';

describe('AsincronaComponent', () => {
  let component: AsincronaComponent;
  let fixture: ComponentFixture<AsincronaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsincronaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsincronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
