import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggerComponent } from './logger.component';
import { LogData, LogType } from '../shared/log.model';

describe('LoggerComponent', () => {
  let component: LoggerComponent;
  let fixture: ComponentFixture<LoggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show log list', () => {
    const logList: LogData[] = [
      {type: LogType.Add, element: 'test@test.com'},
      {type: LogType.Delete, element: 'test2@test2.com'}
    ];
    component.logList = logList;
    fixture.detectChanges();
    const loggerTexts = fixture.debugElement.nativeElement.querySelectorAll('.log-message');
    expect(loggerTexts.length).toBe(2);
    expect(loggerTexts[0].innerText).toBe('test@test.com was added successfully');
    expect(loggerTexts[1].innerText).toBe('test2@test2.com was deleted successfully');
  });
});
