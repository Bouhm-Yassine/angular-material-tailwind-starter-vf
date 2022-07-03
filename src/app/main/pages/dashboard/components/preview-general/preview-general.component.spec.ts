import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewGeneralComponent } from './preview-general.component';

describe('PreviewGeneralComponent', () => {
  let component: PreviewGeneralComponent;
  let fixture: ComponentFixture<PreviewGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
