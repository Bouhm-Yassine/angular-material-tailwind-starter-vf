import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPreviewComponent } from './main-preview.component';

describe('MainPreviewComponent', () => {
  let component: MainPreviewComponent;
  let fixture: ComponentFixture<MainPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
