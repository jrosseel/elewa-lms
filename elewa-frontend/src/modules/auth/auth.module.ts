import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../base-modules/core.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { RegisterService } from './services/register.service';
import { AuthService } from './services/auth.service';
import { UserModule } from '../../base-modules/user/user.module';
import { AuthPrimitivesModule } from '../../base-modules/auth-primitives/auth-primitives.module';


/**
 * Module that contains all logic to log in a user, log out and sign up.
 * 
 * Does not contain the user service. This is contained in separate base module called user.
 */
@NgModule({
  imports: [CoreModule, ReactiveFormsModule, AuthPrimitivesModule, UserModule],
  declarations: [LoginComponent, RegisterComponent],
  providers: [RegisterService, AuthService],
  exports: [LoginComponent, RegisterComponent],
})
export class AuthModule { }
