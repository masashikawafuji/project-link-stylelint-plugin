# Project Links Stylelint Plugin

## ⚠ 注意点️ / Warning

絶対パス`rel://`のみ対応しています。`project://`はまだリント出来ません。

まだテストは書いていません。

This repository is still in development. It's uncertain whether to work correctly in all situations.

## 使い方

1. インストール

```shell
git clone --depth 1 https://github.com/masashikawafuji/project-link-stylelint-plugin.git <任意のディレクトリ>

cd <任意のディレクトリ> && yarn
```

2. .stylelintrc に以下を追加

```json
{
  "plugins": ["<このプラグインのディレクトリ>/lib/index.js"],
  "rules": {
    "plugin/project-links": true
  }
}
```
