import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationUIComponent } from './conversation-ui.component';

describe('ConversationUIComponent', () => {
  let component: ConversationUIComponent;
  let fixture: ComponentFixture<ConversationUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversationUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
