import { Injectable } from '@nestjs/common';

@Injectable() // Decorador: Funcion que se ejecuta antes de la clase. Añade metadatos a la clase.
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
