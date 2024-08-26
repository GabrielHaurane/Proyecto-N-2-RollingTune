export const agregarUsuarioALS = (usuario) => {
  const usuarios = obtenerUsuariosDeLS();
  usuarios.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
};
export const obtenerUsuariosDeLS = () => {
  return ordenarLista(JSON.parse(localStorage.getItem("usuarios")) || []);
};
export const ordenarLista = (lista) => {
  return lista.sort((a, b) => {
    if (a.nombre > b.nombre) {
      return 1;
    }
    if (a.nombre < b.nombre) {
      return -1;
    }
    return 0;
  });
};
export const isEmailRepetido = (email) => {
    const usuarios = obtenerUsuariosDeLS();
    return usuarios.some(user => user.email === email);
  };
