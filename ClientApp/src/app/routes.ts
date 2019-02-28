import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { InsightsComponent } from './insights/insights.component';
import { QuestionsComponent } from './questions/questions.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './_guards/auth.guard';
import { UserDetailComponent } from './admin/user-detail/user-detail.component';
import { UserDetailResolver } from './_resolvers/user-detail-resolver';
import { UserListResolver } from './_resolvers/user-list-resolver';
import { UserEditComponent } from './admin/user-edit/user-edit.component';
import { UserEditResolver } from './_resolvers/user-edit-resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes-guard';

export const appRoutes: Routes = [
    // standard pages
    { path: '', component: HomeComponent},
    { path: 'blog', component: BlogComponent},
    { path: 'insights', component: InsightsComponent},
    { path: 'questions', component: QuestionsComponent},

    // protected admin pages
    {
        path: '', runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'admin', component: AdminComponent, resolve: { users: UserListResolver } },
            { path: 'admin/edit', component: UserEditComponent, resolve: { user: UserEditResolver },
                                  canDeactivate: [PreventUnsavedChanges]},
            { path: 'admin/:id', component: UserDetailComponent, resolve: { user: UserDetailResolver } },
        ]
    },

    // redirect to home page for all other requests
    { path: '**', redirectTo: '', pathMatch: 'full'}
];
