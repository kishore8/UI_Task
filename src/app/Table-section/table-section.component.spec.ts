import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSectionComponent } from './table-section.component';

describe('TableSectionComponent', () => {
  let component: TableSectionComponent;
  let fixture: ComponentFixture<TableSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
