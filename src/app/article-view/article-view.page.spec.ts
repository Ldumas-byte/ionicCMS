import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArticleViewPage } from './article-view.page';

describe('ArticleViewPage', () => {
  let component: ArticleViewPage;
  let fixture: ComponentFixture<ArticleViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
