import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import { MatModule } from './components/modules/mat.module';
import {AppComponent} from './app.component';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {todosReducer} from './store/reducer';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {Effects} from './store/effects';
import {HttpClientModule} from '@angular/common/http';
import {MockTodoApi} from './services/mock-todo-api';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { TodoDescriptionComponent } from './components/todo-description/todo-description.component';
import { TodoModalCreationComponent } from './components/todo-modal-creation/todo-modal-creation.component';
import { HeaderComponent } from './components/header/header.component';
import { DateFormatPipe } from './pipes/date-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoDescriptionComponent,
    TodoModalCreationComponent,
    HeaderComponent,
    DateFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MockTodoApi),
    StoreModule.forRoot({todosStore: todosReducer}),
    EffectsModule.forRoot([Effects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
