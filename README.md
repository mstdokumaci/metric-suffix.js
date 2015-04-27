# metric-suffix.js
Display big numbers in short using metric suffixes like kilo (k), Mega(M).

## How to install

### npm
```sh
npm install metric-suffix
```

### bower
```sh
bower install metric-suffix
```

## How to use

### NodeJS
```js
var metric_suffix = require('metric-suffix');
```

### Browser
```js
var metric_suffix = window.metric_suffix;
```

## Examples

```js
metric_suffix(42) // 42
metric_suffix(999) // 999
metric_suffix(1000) // 1.0k

metric_suffix(1050) // 1.1k
metric_suffix(1050, 2) // 1.1k
metric_suffix(1050, 3) // 1.05k

metric_suffix(1150) // 1.1k
metric_suffix(1150, 2) // 1.1k
metric_suffix(1150, 3) // 1.15k

metric_suffix(12987) // 13k
metric_suffix(12987, 3) // 13.0k

metric_suffix(986725, 3) // 987k
metric_suffix(986725, 4) // 986.7k

metric_suffix(986725123, 4) // 986.7M
metric_suffix(986725123, 5) // 986.73M
metric_suffix(986725123, 6) // 986.725M

metric_suffix(1234, 4) // 1.234k
metric_suffix(12345, 4) // 12.35k
metric_suffix(123456, 4) // 123.5k
```
