import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesModalComponent } from './resources-modal.component';

describe('ResourcesModalComponent', () => {
  let component: ResourcesModalComponent;
  let fixture: ComponentFixture<ResourcesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
