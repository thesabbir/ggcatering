module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx"]}],
  },
  "env": {
    "browser": true,
    "node": true
  }
};