import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { MessageBuddy: 'I have signed up' };
  }

  signin() {
    return { MessageBuddy: 'I have signed in' };
  }
}
