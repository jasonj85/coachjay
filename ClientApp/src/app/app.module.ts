import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule, TabsModule } from 'ngx-bootstrap';
import { NgxGalleryModule } from 'ngx-gallery';
import { JwtModule } from '@auth0/angular-jwt';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { BlogComponent } from './blog/blog.component';
import { InsightsComponent } from './insights/insights.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { QuestionsComponent } from './questions/questions.component';
import { AuthGuard } from './_guards/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { UserService } from './_services/user.service';
import { UserListComponent } from './admin/user-list/user-list.component';
import { UserDetailComponent } from './admin/user-detail/user-detail.component';
import { UserDetailResolver } from './_resolvers/user-detail-resolver';
import { UserListResolver } from './_resolvers/user-list-resolver';
import { UserEditComponent } from './admin/user-edit/user-edit.component';
import { UserEditResolver } from './_resolvers/user-edit-resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes-guard';
import { PhotoEditorComponent } from './admin/photo-editor/photo-editor.component';

export function tokenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      BlogComponent,
      InsightsComponent,
      QuestionsComponent,
      AdminComponent,
      UserListComponent,
      UserDetailComponent,
      UserEditComponent,
      PhotoEditorComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      NgxGalleryModule,
      FileUploadModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      TabsModule.forRoot(),
      JwtModule.forRoot({
         config: {
            tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/posts']
         }
      })
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      UserService,
      UserDetailResolver,
      UserListResolver,
      UserEditResolver,
      PreventUnsavedChanges
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
