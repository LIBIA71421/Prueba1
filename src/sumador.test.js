import contar from "./sumador.js";

describe("Contar", () => {
  it("deberia contar 0 caracteres", () => {
    expect(contar("")).toEqual(0);
  });
});
