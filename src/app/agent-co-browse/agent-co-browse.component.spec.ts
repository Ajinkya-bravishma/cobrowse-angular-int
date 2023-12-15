import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentCoBrowseComponent } from './agent-co-browse.component';

describe('AgentCoBrowseComponent', () => {
  let component: AgentCoBrowseComponent;
  let fixture: ComponentFixture<AgentCoBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentCoBrowseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentCoBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
