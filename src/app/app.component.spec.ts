import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
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

  it('should update list of email', () => {
    component.addEmailToList('test@test.com');
    expect(component.emailList).toEqual(['test@test.com']);
  });

  it('should delete email from list', () => {
    const emailList = ['test@test.com', 'test2@test2.com'];
    component.emailList = emailList;
    const emailData = {emailIndex: 0, emailName: emailList[0]};
    component.deleteEmailFromList(emailData);
    expect(component.emailList.length).toBe(1);
  });
});
