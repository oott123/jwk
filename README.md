# JWK

```bash
$ echo 'jwk' | jwk '_.upperCase($)'
JWK
```

## Examples

### Transfrom URLs

a bit crazy, but it works:

```bash
pbpaste | jwk '$.replace(/ssr:\/\//g, "").split(" ").map(x => Buffer.from(x, "base64").toString().split(":")).filter(z => z[5]).map(y => [y[0], y[1], y[3], Buffer.from(y[5].split("/")[0], "base64").toString(), Buffer.from(y[5].match(/remarks=([^&]+)/)[1], "base64").toString()]).map(z => `ss://${Buffer.from(z[2]+":"+z[3]).toString("base64").replace(/=/,"")}@${z[0]}:${z[1]}/?#${encodeURIComponent(z[4])}`).join("\n")' | pbcopy
```



