import contar from "./sumador.js";

describe("Contar", () => {
  it("deberia contar 0 caracteres", () => {
    expect(contar("")).toEqual(0);
  });
  it("deberia contar 1 caracter", () => {
    expect(contar("h")).toEqual(1);
  });
  it("deberia contar 2 caracteres", () => {
    expect(contar("hi")).toEqual(2);
  });
});
