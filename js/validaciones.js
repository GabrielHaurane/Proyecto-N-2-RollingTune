const validarNombreCancion = (nombre) => {
  const minLength = 2;
  const maxLength = 50;
  if (nombre.length < minLength || nombre.length > maxLength) {
    return `El nombre de la canción debe tener entre ${minLength} y ${maxLength} caracteres.`;
  }
  return '';
};

// Validación del nombre del artista
const validarArtista = (artista) => {
  const minLength = 2;
  const maxLength = 50;
  if (artista.length < minLength || artista.length > maxLength) {
    return `El nombre del artista debe tener entre ${minLength} y ${maxLength} caracteres.`;
  }
  return '';
};

// Validación del nombre del álbum
const validarAlbum = (album) => {
  const minLength = 2;
  const maxLength = 50;
  if (album.length < minLength || album.length > maxLength) {
    return `El nombre del álbum debe tener entre ${minLength} y ${maxLength} caracteres.`;
  }
  return '';
};

// Validación del archivo de audio
const validarAudio = (audio) => {
  if (!audio) {
    return 'Debe seleccionar un archivo de audio.';
  }
  
  const validExtensions = ['audio/mpeg', 'audio/mp3', 'audio/wav', 'audio/ogg'];
  if (!validExtensions.includes(audio.type)) {
    return 'El archivo de audio debe ser de tipo MP3, WAV, OGG o MPEG.';
  }
  
  const maxSizeInMB = 10;
  if (audio.size > maxSizeInMB * 1024 * 1024) {
    return `El archivo de audio no debe exceder los ${maxSizeInMB} MB.`;
  }
  
  return '';
};

// Validación del archivo de imagen
const validarImagen = (imagen) => {
  if (!imagen) {
    return 'Debe seleccionar un archivo de imagen.';
  }
  
  const validExtensions = ['image/jpeg', 'image/png', 'image/gif'];
  if (!validExtensions.includes(imagen.type)) {
    return 'El archivo de imagen debe ser de tipo JPEG, PNG o GIF.';
  }
  
  const maxSizeInMB = 5;
  if (imagen.size > maxSizeInMB * 1024 * 1024) {
    return `El archivo de imagen no debe exceder los ${maxSizeInMB} MB.`;
  }
  
  return '';
};

// Función principal para validar el formulario completo
const validarFormularioCancion = (cancion) => {
  const errores = {};

  // Validaciones individuales
  const errorNombreCancion = validarNombreCancion(cancion.nombre);
  if (errorNombreCancion) errores.nombre = errorNombreCancion;
  
  const errorArtista = validarArtista(cancion.artista);
  if (errorArtista) errores.artista = errorArtista;

  const errorAlbum = validarAlbum(cancion.album);
  if (errorAlbum) errores.album = errorAlbum;

  const errorAudio = validarAudio(cancion.audio);
  if (errorAudio) errores.audio = errorAudio;

  const errorImagen = validarImagen(cancion.imagen);
  if (errorImagen) errores.imagen = errorImagen;

  return errores;
};
