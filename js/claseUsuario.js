export class Usuario {
    constructor(nombre, email, contraseña) {
      this.nombre = nombre;
      this.email = email;
      this.contraseña = contraseña;
      this.isAdmin = false;
    }
  }