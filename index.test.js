const { TypeScale, Scale } = require("./index");

test("Hydrates with default as Major Third", () => {
    const ts = new TypeScale();
    expect(ts.body).toBe("1em");
    expect(ts.h6).toBe("1em");
    expect(ts.h5).toBe("1.25em");
    expect(ts.h4).toBe("1.563em");
    expect(ts.h3).toBe("1.953em");
    expect(ts.h2).toBe("2.441em");
    expect(ts.h1).toBe("3.052em");
});

test("Hydrates with a scale defined in Scale", () => {
    const ts = new TypeScale({ scale: Scale.PerfectFifth });
    expect(ts.body).toBe("1em");
    expect(ts.h6).toBe("1em");
    expect(ts.h5).toBe("1.5em");
    expect(ts.h4).toBe("2.25em");
    expect(ts.h3).toBe("3.375em");
    expect(ts.h2).toBe("5.063em");
    expect(ts.h1).toBe("7.594em");
});

test("Hydrates with custom scale", () => {
    const ts = new TypeScale({ scale: 1.5 });
    expect(ts.body).toBe("1em");
    expect(ts.h6).toBe("1em");
    expect(ts.h5).toBe("1.5em");
    expect(ts.h4).toBe("2.25em");
    expect(ts.h3).toBe("3.375em");
    expect(ts.h2).toBe("5.063em");
    expect(ts.h1).toBe("7.594em");
});

test("Can return a CSS representation", () => {
    const ts = new TypeScale();
    expect(ts.asCSS()).toBe(`\
body { font-size: 1em }
h6 { font-size: 1em }
h5 { font-size: 1.25em }
h4 { font-size: 1.563em }
h3 { font-size: 1.953em }
h2 { font-size: 2.441em }
h1 { font-size: 3.052em }`);
});
