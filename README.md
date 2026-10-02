# Log Sentinel

Log Sentinel is a local-only Chrome side-panel extension for first-response log triage. Paste a sample from a terminal, issue, or incident channel and get stable findings without sending logs to a server.

## What it demonstrates

- Rule-based incident triage for errors, timeouts, credentials and PII
- Evidence-first findings with line numbers and bounded excerpts
- A deterministic score and verdict suitable for a future CI or support bot
- Separation between a pure TypeScript analyzer and the Chrome UI
- Privacy by default: no network requests, model calls or API keys

## Interview-ready engineering story

The project demonstrates a small observability pipeline: normalize log lines, apply ordered detection rules, preserve bounded evidence, then produce a deterministic incident verdict. The core can later be reused by a support bot or CI check without changing the browser UI.

## Run

```bash
pnpm install
pnpm test -- --run
pnpm lint
pnpm build
```

Load `dist/` in `chrome://extensions` with Developer mode enabled.

The repository also includes `LogSentinel-v0.1.0.zip` as a ready-to-load package.
