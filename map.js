const usuarios = [
  { nome: 'bhayron', computadores: [{ pc: 'Mac' }, { marca: 'Apple' }] },
  { nome: 'nykael', computadores: [{ pc: 'Asus' }, { marca: 'lenovo' }] },
];

const lista = usuarios.map((usuario, index) => {
  const nomePcs = usuario.computadores.map((computador) => computador.pc);
  return `${index + 1} ${usuario.nome}: ${nomePcs}`;
});

console.log(lista);
