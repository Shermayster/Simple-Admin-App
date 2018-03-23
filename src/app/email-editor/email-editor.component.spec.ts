import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailEditorComponent } from './email-editor.component';

describe('EmailEditorComponent', () => {
  let component: EmailEditorComponent;
  let fixture: ComponentFixture<EmailEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title', () => {
    fixture.detectChanges();
    const title: HTMLElement = fixture.debugElement.nativeElement.querySelector('h2');
    expect(title.innerText).toBe('Display');
  });

  it('should have table with labels', () => {
    fixture.detectChanges();
    const table: HTMLTableElement = fixture.debugElement.nativeElement.querySelector('table');
    expect(table).not.toBeNull();
    const tableTitles = fixture.debugElement.nativeElement.querySelectorAll('table th');
    expect(tableTitles[0].innerText).toBe('Email');
    expect(tableTitles[1].innerText).toBe('Function');
  });

  it('should show email list', () => {
    const emailList = ['test@test.com', 'test2@test2.com'];
    component.emailList = emailList;
    fixture.detectChanges();
    const tabelRows = fixture.debugElement.nativeElement.querySelectorAll('table tr');
    expect(tabelRows[1].innerText).toContain(emailList[0]);
    expect(tabelRows[2].innerText).toContain(emailList[1]);
  });

  it('should send email address to container', () => {
    const spy = spyOn(component.deleteEmail, 'emit');
    const emailList = ['test@test.com', 'test2@test2.com'];
    component.emailList = emailList;
    fixture.detectChanges();
    const deleteButtons = fixture.debugElement.nativeElement.querySelectorAll('.delete-btn');
    deleteButtons[0].click();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith(emailList[0]);
  });
});
