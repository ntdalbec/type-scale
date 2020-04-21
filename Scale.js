
/**
 * A collection of scales in terms of intervals.
 * @see {@link https://wikipedia.org/wiki/Interval_(music)} for more information
 * @enum { string }
 */
const Scale = {
    Unison: 1,
    MinorSecond: 16/15,
    MajorSecond: 9/8,
    MinorThird: 6/5,
    MajorThird: 5/4,
    PerfectFourth: 4/3,
    DiminishedFifth: 7/5,
    PerfectFifth: 3/2,
    MinorSixth: 8/5,
    MajorSixth: 5/3,
    MinorSeventh: 7/4,
    MajorSeventh: 15/8,
    Octave: 2
};

module.exports = Object.freeze(Scale);