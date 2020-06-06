import spongeBobCase from "./index";

describe("SpongeBob Case", () => {
  it("formats a regular message to SpongeBobCase", () => {
    const output = spongeBobCase("Well hi there, Patrick.");
    expect(output).toBe("wElL hI tHeRe, pAtRiCk.");
  });

  it("formats a regular message to SpongeBobCase with numbers", () => {
    const output = spongeBobCase("I thought of something funnier than 24. 25!");
    expect(output).toBe("i tHoUgHt oF sOmEtHiNg fUnNiEr tHaN 24. 25!");
  });

  it("formats a message already in SpongeBobCase", () => {
    const output = spongeBobCase("tHiS mUsT bE yOuR wAlLeT");
    expect(output).toBe("tHiS mUsT bE yOuR wAlLeT");
  });

  it("formats a message with emojis to SpongeBobCase", () => {
    const output = spongeBobCase("IMAGINATION 🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈.");
    expect(output).toBe("iMaGiNaTiOn 🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈.");
  });

  it("retains spaces in the SpongeBobCase conversion", () => {
    const output = spongeBobCase(
      "Hello     is    this     the       Krusty      Krab   ?     "
    );
    expect(output).toBe(
      "hElLo     iS    tHiS     tHe       kRuStY      kRaB   ?     "
    );
  });

  it("formats a message with various punctuation marks to SpongeBobCase", () => {
    const output = spongeBobCase("NO, THIS IS PATRICK!!!!!!");
    expect(output).toBe("nO, tHiS iS pAtRiCk!!!!!!");
  });
});
