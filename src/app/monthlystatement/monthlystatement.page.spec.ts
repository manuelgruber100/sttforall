import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonthlystatementPage } from './monthlystatement.page';

describe('MonthlystatementPage', () => {
  let component: MonthlystatementPage;
  let fixture: ComponentFixture<MonthlystatementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlystatementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonthlystatementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
