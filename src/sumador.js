function contar(cant) {
  cant = cant.replace(/[^a-zA-Z]/g, '');
  return cant.length;
}

export default contar;
