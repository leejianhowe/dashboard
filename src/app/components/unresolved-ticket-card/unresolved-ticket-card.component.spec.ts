import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnresolvedTicketCardComponent } from './unresolved-ticket-card.component';

describe('UnresolvedTicketCardComponent', () => {
  let component: UnresolvedTicketCardComponent;
  let fixture: ComponentFixture<UnresolvedTicketCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnresolvedTicketCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnresolvedTicketCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
