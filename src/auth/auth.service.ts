import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup() {
    return { MessageBuddy: 'I have signed up' };
  }

  signin() {
    return { MessageBuddy: 'I have signed in' };
  }
}
