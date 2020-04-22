
/**
 * A collection of scales in terms of intervals.
 * @see {@link https://wikipedia.org/wiki/Interval_(music)} for more information
 * @enum { string }
 */
const Scale = {
    /** 1 */
    Unison: 1,
    /** 1.067 */
    MinorSecond: 16/15,
    /** 1.125 */
    MajorSecond: 9/8,
    /** 1.2 */
    MinorThird: 6/5,
    /** 1.25 */
    MajorThird: 5/4,
    /** 1.333 */
    PerfectFourth: 4/3,
    /** 1.4 */
    DiminishedFifth: 7/5,
    /** 1.5 */
    PerfectFifth: 3/2,
    /** 1.6 */
    MinorSixth: 8/5,
    /** 1.667 */
    MajorSixth: 5/3,
    /** 1.75 */
    MinorSeventh: 7/4,
    /** 1.875 */
    MajorSeventh: 15/8,
    /** 2 */
    Octave: 2
};

module.exports = Object.freeze(Scale);