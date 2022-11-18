import { AuthGuard } from '@nestjs/passport';

// Returns JWT Token?
export class JwtGuard extends AuthGuard('jwt') {
  constructor() {
    super();
  }
}
