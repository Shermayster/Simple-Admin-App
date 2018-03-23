import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorComponent } from './editor.component';
import { FormsModule, EmailValidator } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


describe('EditorComponent', () => {
  let component: EditorComponent;
  let fixture: ComponentFixture<EditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      declarations: [ EditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have Editor label', () => {
    fixture.detectChanges();
    const label: HTMLElement = fixture.debugElement.nativeElement.querySelector('label');
    expect(label.innerText).toBe('Email');
  });

  it('should have input element with type email', () => {
    fixture.detectChanges();
    const inputEl: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('input');
    expect(inputEl.getAttribute('type')).toBe('email');
  });

  it('should have button with type submit and inner text should be Send', () => {
    fixture.detectChanges();
    const button: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('button');
    expect(button.getAttribute('type')).toBe('submit');
    expect(button.innerText).toBe('Send');
  });

  xit('submit button should be disable if email not valid', () => {
    fixture.detectChanges();
    const button: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('button');
    expect(button.hasAttribute('disabled')).toBeTruthy();
  });

  it('send button should call to submit function', () => {
    fixture.detectChanges();
    const spy = spyOn(component, 'onSubmit');
    const inputEl: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('input');
    inputEl.value = 'test@test.com';
    const button: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
    fixture.detectChanges();
  });

  it('submit function shoul send output with email value', () => {
    fixture.detectChanges();
    const spy = spyOn(component.addEmail, 'emit');
    component.onSubmit('test@test.com', {resetForm: () => null});
    expect(spy).toHaveBeenCalledWith('test@test.com');
  });
});
