import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddUserToProjectModalPage } from './add-user-to-project-modal.page';

describe('AddUserToProjectModalPage', () => {
  let component: AddUserToProjectModalPage;
  let fixture: ComponentFixture<AddUserToProjectModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserToProjectModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddUserToProjectModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
