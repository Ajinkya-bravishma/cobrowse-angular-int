import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentPresentComponent } from './agent-present.component';

describe('AgentPresentComponent', () => {
  let component: AgentPresentComponent;
  let fixture: ComponentFixture<AgentPresentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentPresentComponent]
    });
    fixture = TestBed.createComponent(AgentPresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
