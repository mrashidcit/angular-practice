/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AfterContentParentComponent } from './after-content-parent.component';

describe('AfterContentParentComponent', () => {
  let component: AfterContentParentComponent;
  let fixture: ComponentFixture<AfterContentParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterContentParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterContentParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
