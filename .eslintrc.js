module.exports =  {
    env: {
        "browser": true,
        "es6": true,
        "jest": true
    },
    extends: [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:flowtype/recommended",
        "plugin:vue/essential"
    ],
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    rules: {
        "node/no-unpublished-require": "off",
        "no-empty": "off",
        "no-console": "off",
        "vue/html-self-closing": "off",
        "import/no-unresolved": 0,
        "array-bracket-spacing": [2, "never"],              // 指定数组的元素之间要以空格隔开(, 后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
        "comma-spacing": [2, {"before":false, "after":true}],              // 控制逗号前后的空格
        "key-spacing": [2, {"beforeColon": false, "afterColon": true}],     // 强制在对象字面量的属性中键和值之间使用一致的间距 （"align": "colon"  对齐）
        // "keyword-spacing": [2, {"before": true, "after": true}],           // 强制在关键字前后使用一致的空格 (前后腰需要)
        // "no-mixed-spaces-and-tabs": ['error', "smart-tabs"],               // 不允许空格和 tab 混合缩进
        "indent": ["error", 2]
    },
    globals: {
        __dirname: true,
        module: true,
        ENV_CONFIG: true,
        process: true,
    }
}
