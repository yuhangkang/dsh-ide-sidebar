[**English**](https://github.com/yuhangkang/dsh-ide-sidebar/blob/main/README.en.md) | 中文

---

# dsh-ide-sidebar

<p align="center">
  <img src="https://raw.githubusercontent.com/yuhangkang/dsh-ide-sidebar/main/.github/assets/banner-en.png" alt="dsh-ide-sidebar" width="100%">
</p>

> IDE-style workspace switcher sidebar plugin (Web / browser-client bundle).
>
> 中文版见 [README.md](https://github.com/yuhangkang/dsh-ide-sidebar/blob/main/README.md).

Replaces the default DSH sidebar with an **IDE-style workspace switcher**: a floating dropdown in the top-left to switch workspaces in one click, a session list that filters by the current workspace, status lights that mark done / pending at a glance, plus workspace & session search and workspace rename / delete / archive / create.

> `dsh-plugin` ecosystem: this plugin follows the [DeepSeek Harness contribution guide](https://github.com/deepseek-ai/deepseek-harness/blob/master/CONTRIBUTING.md), is shipped as a distributable bundle, and carries the `dsh-plugin` topic for discoverability.

---

## Quick install

```bash
cd "$DSH_HOME/profiles/web"
dsh plugin --profile web add dsh-ide-sidebar
```

Then append this dependency to the end of your profile `package.json` → `dsh.profile.bundles`:

```jsonc
"dsh": {
  "profile": {
    "bundles": [ "dsh-base", /* ... */, "dsh-ide-sidebar" ]
  }
}
```

Restart `dsh` (web). Full install / uninstall instructions are below in “[Install & Uninstall](#install--uninstall)”.

> `npm i dsh-ide-sidebar` from [registry.npmjs.org](https://www.npmjs.com/package/dsh-ide-sidebar) also works.

## Changelog

| Version | Description |
|---|---|
| **v0.1.0** | Initial release: IDE-style workspace switcher core features (dropdown, filtering, status lights, search, management) |
| **v0.1.1** | README banner now uses an absolute raw URL; added `.gitignore` (prevents `.npmrc` leak); removed legacy banner |

> Releases: [github.com/yuhangkang/dsh-ide-sidebar/releases](https://github.com/yuhangkang/dsh-ide-sidebar/releases)

---

## Overview

**What problem does it solve?** The native DSH Web GUI sidebar is a flat global session list, with no efficient navigation across multiple workspaces. For users juggling several workspaces (projects) daily, hopping between sessions is costly. This plugin upgrades the sidebar to an IDE-like workspace view:

- a floating dropdown on top showing the current workspace; switch in one click;
- sessions filtered by workspace, so you only see the sessions relevant to the current context;
- each session carries a status light (done 🔵 / pending 🟠) so progress is scannable at a glance;
- built-in search that covers both workspaces and sessions; supports rename / delete / archive / new workspace.

**Who is it for?** Power users of the DSH Web GUI and Agent developers who juggle multiple workspaces in parallel and switch often.

## Features

- Floating workspace-switcher dropdown in the top-left (`idebar-switcher`)
- Session list filtered by the active workspace
- Three-state status lights: done (brand blue) / pending (warn amber, pulse animation)
- Workspace search + session search
- Workspace management: add, rename, delete, archive
- Session management: rename, delete
- Pure browser-side bundle, no host behavior, no extra server dependencies

## Compatibility

- **Platform**: `web` (DSH browser GUI) only
- **DSH version**: `dsh >= 0.1.0-rc` (aligned with the current RC interfaces of `@deepseek-ai/dsh-client-runtime` and `@deepseek-ai/dsh-client-ui-sidebar`)
- **Injected deps**: `@deepseek-ai/dsh-client-runtime`, `@deepseek-ai/dsh-client-ui-sidebar` (provided by the runtime injection seam; `react >= 17` is a peerDependency)
- **Driver note**: this repo is a standalone bundle (`cordis.patch.yml` + `lib/`); it does not modify official package sources
- **Last verified**: v0.1.0 loaded successfully on the `web` profile in 2026-08
- ⚠️ Does **not** include the “red error light” feature (that needs dynamic-plugin host RPC; a resident bundle has no such channel)

## Install & Uninstall

### Install (option 1: `dsh plugin`, recommended)

```bash
cd "$DSH_HOME/profiles"
dsh plugin --profile web add dsh-ide-sidebar
```

Then append `dsh-ide-sidebar` to the `dsh.profile.bundles` array and restart `dsh` (web).

### Install (option 2: manual mount)

1. Put this directory somewhere pnpm can resolve, and symlink it into `$DSH_HOME/profiles/node_modules/dsh-ide-sidebar` (hoisted layout);
2. In the profile `package.json`:
   - add `"dsh-ide-sidebar": "*"` to `dependencies`
   - append `"dsh-ide-sidebar"` to `dsh.profile.bundles`
3. Restart `dsh`.

> ⚠️ All config files you write must be **UTF-8 without a BOM**.

### Uninstall

1. Remove the `dsh-ide-sidebar` entry from `bundles`;
2. Remove the dependency from `dependencies`;
3. Delete the `$DSH_HOME/profiles/node_modules/dsh-ide-sidebar` symlink;
4. Restart `dsh`.

## Quick start

1. Install by either method and restart `dsh`;
2. Open the Web GUI — the top-left shows the current workspace name + chevron;
3. Click the chevron → switch workspaces, or search / create / rename / archive a workspace;
4. The session list filters to the current workspace; watch the lights: 🔵 done, 🟠 pending.

## Configuration

This plugin has **no configuration** — all behavior is built-in. The injected DSH services (`@deepseek-ai/dsh-client-runtime`, `@deepseek-ai/dsh-client-ui-sidebar`) come from the runtime and are provided automatically; it reads no env vars and keeps no user data.

> A `.dsh-ide-sidebar` config namespace will appear here if it ever becomes configurable.

## Permissions & data

- Purely browser-side; `apply()` (host half) is a no-op — it does **not** touch the host process, the filesystem, or local credentials;
- Reads the `Session` / `Workspace` lists already exposed by the DSH client runtime (injected via `dsh-client-runtime`) to render the UI;
- Every session action (archive / rename / delete / new) runs through DSH-authorized client interfaces; no extra network egress;
- Collects no logs and no telemetry;
- Follows DSH design tokens (`--dsw-*`); no external requests.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| Sidebar unchanged | not in `bundles`, or `dsh` not restarted | confirm `dsh.profile.bundles` includes `dsh-ide-sidebar`; restart |
| Deps not injected | profile is missing `dsh-client-runtime` / `dsh-client-ui-sidebar` | these ship with run; make sure the profile boots from `dsh-base` |
| Broken icons / styles | theme tokens mismatch the current DSH theme | file an Issue with DSH version and theme name |
| Load fails due to BOM | config written with a BOM | rewrite package.json as UTF-8 without BOM, restart |

For anything else, please open an [Issue](https://github.com/yuhangkang/dsh-ide-sidebar/issues) and include the DSH version, the web console error, and a screenshot.

## Development

```bash
git clone https://github.com/yuhangkang/dsh-ide-sidebar.git && cd dsh-ide-sidebar
# This is a plain JS bundle; no TypeScript build step is required.
# Local validation: mount manually (Install, option 2), then restart dsh.
```

- Entry: `lib/index.mjs` (Host, no-op)
- Client UI: `lib/client.js` (React, loaded via `window.__ModuleLoader__`)
- Types: `lib/index.d.mts`
- Mount: `cordis.patch.yml` → `insert ide-sidebar`

Issues and PRs welcome.

## License & Security

- **License**: MIT
- **Security**: for security issues, message the maintainers privately; do not leak credentials / private info in a public Issue.
- Third-party plugins run with your own permissions — review the source yourself, and don’t run unknown plugins on machines holding sensitive keys.

---

**Repo**: https://github.com/yuhangkang/dsh-ide-sidebar
**Topics**: `dsh-plugin`, `deepseek-harness`, `dsh` — discoverable at [github.com/topics/dsh-plugin](https://github.com/topics/dsh-plugin).