# type-scale
A Node.js library for dealing with HTML/CSS typographic scales

## Installation
```bash
npm install @ntdalbec/type-scale
```

## Usage
```javascript
const { TypeScale, Scale } = require("type-scale");

const scale = new TypeScale({ scale: Scale.MajorThird });

console.log(`\
h1: ${scale.h1}
h2: ${scale.h2}
h3: ${scale.h3}
h4: ${scale.h4}
h5: ${scale.h5}
h6: ${scale.h6}
`)

// expected:
// h1:   3.052em
// h2:   2.441em
// h3:   1.953em
// h4:   1.563em
// h5:   1.25em
// h6:   1em
// body: 1em
```

## Classes

<dl>
<dt><a href="#TypeScale">TypeScale</a></dt>
<dd><p>Represents a Typographic scale in terms of HTML elements</p>
</dd>
</dl>

<a name="TypeScale"></a>

## TypeScale
Represents a Typographic scale in terms of HTML elements


- [type-scale](#type-scale)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Classes](#classes)
  - [TypeScale](#typescale)
    - [new TypeScale(options)](#new-typescaleoptions)
    - [typeScale.body : <code>string</code>](#typescalebody--string)
    - [typeScale.h6 : <code>string</code>](#typescaleh6--string)
    - [typeScale.h5 : <code>string</code>](#typescaleh5--string)
    - [typeScale.h4 : <code>string</code>](#typescaleh4--string)
    - [typeScale.h3 : <code>string</code>](#typescaleh3--string)
    - [typeScale.h2 : <code>string</code>](#typescaleh2--string)
    - [typeScale.h1 : <code>string</code>](#typescaleh1--string)
    - [typeScale.asCSS() ⇒ <code>string</code>](#typescaleascss-%e2%87%92-string)
  - [Scale : <code>enum</code>](#scale--enum)
  - [Contributing](#contributing)
  - [License](#license)

<a name="new_TypeScale_new"></a>

### new TypeScale(options)

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.scale | <code>number</code> | The ratio to be used as the scale |

<a name="TypeScale+body"></a>

### typeScale.body : <code>string</code>
<a name="TypeScale+h6"></a>

### typeScale.h6 : <code>string</code>
<a name="TypeScale+h5"></a>

### typeScale.h5 : <code>string</code>
<a name="TypeScale+h4"></a>

### typeScale.h4 : <code>string</code>
<a name="TypeScale+h3"></a>

### typeScale.h3 : <code>string</code>
<a name="TypeScale+h2"></a>

### typeScale.h2 : <code>string</code>
<a name="TypeScale+h1"></a>

### typeScale.h1 : <code>string</code>
<a name="TypeScale+asCSS"></a>

### typeScale.asCSS() ⇒ <code>string</code>
Get the typographic scale as a CSS string

**Returns**: <code>string</code> - - A string representing a group of CSS rulesets  
<a name="Scale"></a>

## Scale : <code>enum</code>
A collection of scales in terms of intervals.

**See**: [https://wikipedia.org/wiki/Interval_(music)](https://wikipedia.org/wiki/Interval_(music)) for more information  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| Unison | <code>string</code> | <code>1</code> | 1 |
| MinorSecond | <code>string</code> | <code>&quot;&quot;</code> | 1.067 |
| MajorSecond | <code>string</code> | <code>&quot;&quot;</code> | 1.125 |
| MinorThird | <code>string</code> | <code>&quot;&quot;</code> | 1.2 |
| MajorThird | <code>string</code> | <code>&quot;&quot;</code> | 1.25 |
| PerfectFourth | <code>string</code> | <code>&quot;&quot;</code> | 1.333 |
| DiminishedFifth | <code>string</code> | <code>&quot;&quot;</code> | 1.4 |
| PerfectFifth | <code>string</code> | <code>&quot;&quot;</code> | 1.5 |
| MinorSixth | <code>string</code> | <code>&quot;&quot;</code> | 1.6 |
| MajorSixth | <code>string</code> | <code>&quot;&quot;</code> | 1.667 |
| MinorSeventh | <code>string</code> | <code>&quot;&quot;</code> | 1.75 |
| MajorSeventh | <code>string</code> | <code>&quot;&quot;</code> | 1.875 |
| Octave | <code>string</code> | <code>2</code> | 2 |


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
