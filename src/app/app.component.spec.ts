import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LogData, LogType } from './shared/log.model';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(fixture).toBeTruthy();
  }));

  it('should update list of email and logs', () => {
    component.addEmailToList('test@test.com');
    expect(component.emailList).toEqual(['test@test.com']);
    const expectedLogList: LogData[] = [{type: LogType.Add, element: 'test@test.com'}];
    expect(component.logList).toEqual(expectedLogList);
  });

  it('should delete email from email list and action to log list', () => {
    const emailList = ['test@test.com', 'test2@test2.com'];
    component.emailList = emailList;
    const emailData = {emailIndex: 0, emailName: emailList[0]};
    component.deleteEmailFromList(emailData);
    expect(component.emailList.length).toBe(1);
    const expectedLogList: LogData[] = [{type: LogType.Delete, element: 'test@test.com'}];
    expect(component.logList).toEqual(expectedLogList);
  });
});
