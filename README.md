# Project Links Stylelint Plugin

## ⚠ 注意点️

絶対パス`rel://`のみ対応しています。`project://`はまだリント出来ません。

まだテストは書いていません。

## 使い方

1. インストール

```shell
git clone --depth 1 https://github.com/masashikawafuji/project-link-stylelint-plugin.git <任意のディレクトリ>

cd <任意のディレクトリ> && yarn
```

2. .stylelintrc に以下を追加

```json
{
  "plugins": ["/path/to/lib/index.js"],
  "rules": {
    "plugin/project-links": true
  }
}
```
