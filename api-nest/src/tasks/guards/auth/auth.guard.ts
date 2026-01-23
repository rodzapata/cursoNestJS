import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return request.headers.authorization === 'Bearer miToken';

    /*
const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers['authorization'];

    if (!authHeader) {
      throw new UnauthorizedException('No se envió el header Authorization');
    }

    const [type, token] = authHeader.split(' ');

    if (type !== 'Bearer' || token !== 'mi-token-secreto') {
      throw new UnauthorizedException('Token inválido o mal formado');
    }

    return true; // Acceso permitido    
    */
  }
}
