import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProjectListMultipleModalPage } from './project-list-multiple-modal.page';

describe('ProjectListMultipleModalPage', () => {
  let component: ProjectListMultipleModalPage;
  let fixture: ComponentFixture<ProjectListMultipleModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectListMultipleModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectListMultipleModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
