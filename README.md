# type-scale
A Node.js library for dealing with HTML/CSS typographic scales

## Installation
```bash
npm install @ntdalbec/type-scale
```

## Usage
```javascript
const { TypeScale, Scale } = require("type-scale");

const scale = new TypeScale(Scale.MajorThird);

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

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Classes

<dl>
<dt><a href="#TypeScale">TypeScale</a></dt>
<dd><p>Represents a Typographic scale in terms of HTML elements</p>
</dd>
</dl>

<a name="TypeScale"></a>

## TypeScale
Represents a Typographic scale in terms of HTML elements


* [TypeScale](#TypeScale)
    * [new TypeScale(options)](#new_TypeScale_new)
    * [.body](#TypeScale+body) : <code>string</code>
    * [.h6](#TypeScale+h6) : <code>string</code>
    * [.h5](#TypeScale+h5) : <code>string</code>
    * [.h4](#TypeScale+h4) : <code>string</code>
    * [.h3](#TypeScale+h3) : <code>string</code>
    * [.h2](#TypeScale+h2) : <code>string</code>
    * [.h1](#TypeScale+h1) : <code>string</code>
    * [.asCSS()](#TypeScale+asCSS) ⇒ <code>string</code>

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

| Name | Type | Default |
| --- | --- | --- |
| Unison | <code>string</code> | <code>1</code> | 
| MinorSecond | <code>string</code> | <code>&quot;&quot;</code> | 
| MajorSecond | <code>string</code> | <code>&quot;&quot;</code> | 
| MinorThird | <code>string</code> | <code>&quot;&quot;</code> | 
| MajorThird | <code>string</code> | <code>&quot;&quot;</code> | 
| PerfectFourth | <code>string</code> | <code>&quot;&quot;</code> | 
| DiminishedFifth | <code>string</code> | <code>&quot;&quot;</code> | 
| PerfectFifth | <code>string</code> | <code>&quot;&quot;</code> | 
| MinorSixth | <code>string</code> | <code>&quot;&quot;</code> | 
| MajorSixth | <code>string</code> | <code>&quot;&quot;</code> | 
| MinorSeventh | <code>string</code> | <code>&quot;&quot;</code> | 
| MajorSeventh | <code>string</code> | <code>&quot;&quot;</code> | 
| Octave | <code>string</code> | <code>2</code> | 

