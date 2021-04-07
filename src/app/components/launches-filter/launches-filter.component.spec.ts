import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaunchesFilterComponent } from './launches-filter.component';

describe('FilterComponent', () => {
  let component: LaunchesFilterComponent;
  let fixture: ComponentFixture<LaunchesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchesFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
