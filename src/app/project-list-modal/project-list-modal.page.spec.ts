import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProjectListModalPage } from './project-list-modal.page';

describe('ProjectListModalPage', () => {
  let component: ProjectListModalPage;
  let fixture: ComponentFixture<ProjectListModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectListModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectListModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
