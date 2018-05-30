#Практически проект

##Структура и инициализация на проекта

```bash
mkdir project/{src,dist} -p
```

src  - код на приложението
dist - крайният резултат

```bash
npm init
```

##Инсталиране на зависимостите

```bash
npm i webpack@3.12 webpack-cli ts-loader@3.5 --save-dev 
npm i mocha mocha-webpack chai assert typescript --save-dev
npm i @types/jasmine --save-dev
```

    * минимални настройки на tsconfig.json

(
1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
2. https://regexr.com/
3. http://www.chaijs.com/
4. https://en.wikipedia.org/wiki/Behavior-driven_development
)

```json
{
  "compilerOptions": {
    /* Basic Options */
    "target": "es5",
    "sourceMap":true
  },
  "exclude": [
    "node_modules",
    "**/*.spec.ts"
    ]
}
```

##Настройка на webpack

```js
//webpack.config.js
module.exports = {
    entry: './src/index.ts',
    output:{
        filename:'./dist/bundle.js'
    }
    , resolve:{
        extensions:['.ts','.js']
    }
    , module:{
        rules:[{
            test: /\.ts?$/, loader: 'ts-loader'
        }]
    }
};
```

```js
//webpack.config.js
module.exports = {
    entry: './test/index.ts',
    , resolve:{
        extensions:['.ts','.js']
    }
    , module:{
        rules:[{
            test: /\.ts?$/, loader: 'ts-loader'
        }]
    }
};
```
    * ./src/index.ts
    * ./test/index.ts (http://www.chaijs.com/)
