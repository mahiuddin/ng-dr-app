import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminleftsideComponent } from './adminleftside.component';

describe('AdminleftsideComponent', () => {
  let component: AdminleftsideComponent;
  let fixture: ComponentFixture<AdminleftsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminleftsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminleftsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
