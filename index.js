const Scale = require("./Scale");

/** Represents a Typographic scale in terms of HTML elements */
class TypeScale {

    /**
     * @param { Object } options
     * @param { number } options.scale - The ratio to be used as the scale
     */
    constructor({ scale = Scale.MajorThird } = {}) {
        const trailingZeros = /\.?0+$/; // matches `00` in `1.500` and `.000` in `1.000`
        const term = "em";

        // takes a position in the scale and returns its associated size as a CSS expression
        const size = (interval) =>
            Math.pow(scale, interval).toFixed(3).replace(trailingZeros, "") +
            term;

        /** @type { string } */
        this.body = size(0);
        /** @type { string } */
        this.h6 = size(0);
        /** @type { string } */
        this.h5 = size(1);
        /** @type { string } */
        this.h4 = size(2);
        /** @type { string } */
        this.h3 = size(3);
        /** @type { string } */
        this.h2 = size(4);
        /** @type { string } */
        this.h1 = size(5); 
    }

    /**
     * Get the typographic scale as a CSS string
     * @return { string } - A string representing a group of CSS rulesets
     */
    asCSS() {
        // take a selector and returns a ruleset
        const ruleset = (selector) =>
            `${selector} { font-size: ${this[selector]} }`;

        // create and concatenate a batch of rulesets
        return ["body", "h6", "h5", "h4", "h3", "h2", "h1"]
            .map(ruleset)
            .join("\n");
    }
}

module.exports = {
    TypeScale,
    Scale,
};
