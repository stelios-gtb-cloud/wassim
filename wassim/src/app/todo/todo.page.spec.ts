import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoPage } from './todo.page';

describe('TodoComponent', () => {
  let component: TodoPage;
  let fixture: ComponentFixture<TodoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
