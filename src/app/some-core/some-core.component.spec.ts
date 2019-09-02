import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeCoreComponent } from './some-core.component';

describe('SomeCoreComponent', () => {
  let component: SomeCoreComponent;
  let fixture: ComponentFixture<SomeCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
