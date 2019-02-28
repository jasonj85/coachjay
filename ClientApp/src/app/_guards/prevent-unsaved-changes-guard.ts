import { Injectable } from '@angular/core';
import { UserEditComponent } from '../admin/user-edit/user-edit.component';
import { CanDeactivate } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<UserEditComponent> {
    canDeactivate(component: UserEditComponent) {
        if (component.editForm.dirty) {
            return confirm('Press OK to continue. Any unsaved changes on this page will be lost!');
        }
        return true;
    }
}
