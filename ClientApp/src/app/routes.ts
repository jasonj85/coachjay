import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { InsightsComponent } from './insights/insights.component';
import { QuestionsComponent } from './questions/questions.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './_guards/auth.guard';

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
            { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]}
        ]
    },

    // redirect to home page for all other requests
    { path: '**', redirectTo: '', pathMatch: 'full'}
];
