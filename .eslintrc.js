module.exports = {
  "ecmaFeatures": {
    "modules": true,
  },
  "env": {
    "es6": true,
    "node": true
  },
  "rules": {
    "brace-style": [2, "1tbs", { "allowSingleLine": true }],
    "comma-style": [2, "first", { exceptions: {ArrayExpression: true, ObjectExpression: true} }],
    "complexity": [2, 7],
    "consistent-this": [2, "prefer-fat-arrow-over-reassigning-thing"],
    "curly": 2,
    "eqeqeq": [2, "allow-null"],
    "no-const-assign": 2,
    "no-shadow-restricted-names": 2,
    "no-undef": 2,
    "no-unused-vars": [2, { "argsIgnorePattern": "^_" }],
    "no-use-before-define": 2,
    "no-var": 2,
    "strict": 0,
    "prefer-const": 2,
    "prefer-spread": 2,
    "prefer-template": 2,
    "quotes": [2, "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
    "radix": 2,
    "semi": 2,
    "space-infix-ops": 2
  }
}
