window.__ModuleLoader__.load({
	id: "dsh-ide-sidebar",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		var React = require("react");

		const CSS = `
.idebar-root{display:flex;flex-direction:column;height:100%;min-height:0;box-sizing:border-box;padding:2px 6px 0;gap:4px;position:relative;color:var(--dsw-alias-label-primary);font-family:inherit}
.idebar-switcher{position:relative;z-index:60;display:flex;align-items:center;gap:8px;height:36px;padding:0 10px;border-radius:9px;cursor:pointer;border:none;background:transparent;color:var(--dsw-alias-label-primary);flex:none;min-width:0;font-size:13px;line-height:1;user-select:none;transition:background-color .12s ease}
.idebar-switcher:hover,.idebar-switcher.idebar-open{background:var(--dsw-alias-interactive-bg-hover)}
.idebar-switcher .idebar-name{flex:1;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-weight:600;font-size:13px}
.idebar-switcher .idebar-caret{display:inline-flex;color:var(--dsw-alias-label-secondary);flex:none}
.idebar-badge{display:inline-flex;align-items:center;justify-content:center;min-width:18px;height:18px;border-radius:9px;font-size:11px;font-weight:700;padding:0 5px;box-sizing:border-box;flex:none;color:#fff}
.idebar-badge-pending{background:var(--dsw-alias-state-warn-primary);animation:idebar-pulse 1.2s infinite}
.idebar-badge-done{background:var(--dsw-alias-brand-primary)}
@keyframes idebar-pulse{0%,100%{opacity:1}50%{opacity:.45}}
.idebar-panel{position:fixed;width:300px;max-width:calc(100vw - 24px);background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l1);border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,.05),0 12px 28px rgba(0,0,0,.18);padding:6px;display:flex;flex-direction:column;gap:2px;min-width:260px;overflow:auto;z-index:2147480000;opacity:0;visibility:hidden;pointer-events:none;transform:translateY(-4px) scale(.995);transition:opacity .14s ease,transform .14s ease,visibility 0s linear .14s}
.idebar-panel.idebar-panel-open{opacity:1;visibility:visible;pointer-events:auto;transform:translateY(0) scale(1);transition:opacity .14s ease .03s,transform .14s ease .03s,visibility 0s linear .03s}
.idebar-panel::-webkit-scrollbar{width:8px}
.idebar-panel::-webkit-scrollbar-thumb{background:var(--dsw-alias-border-l2);border-radius:4px;border:2px solid transparent;background-clip:content-box}
.idebar-panel-search{display:flex;align-items:center;gap:6px;height:30px;padding:0 8px;border-radius:8px;background:var(--dsw-alias-bg-base);border:1px solid var(--dsw-alias-border-l1);flex:none;box-sizing:border-box;margin-bottom:2px;transition:border-color .12s ease}
.idebar-panel-search:focus-within{border-color:var(--dsw-alias-brand-primary)}
.idebar-panel-search svg{width:12px;height:12px;flex:none;color:var(--dsw-alias-label-tertiary)}
.idebar-panel-search input{flex:1;min-width:0;background:transparent;border:none;outline:none;color:var(--dsw-alias-label-primary);font-size:12px;padding:0}
.idebar-panel-search input::placeholder{color:var(--dsw-alias-label-tertiary)}
.idebar-menu-row{display:flex;align-items:center;gap:8px;height:32px;padding:0 8px;border-radius:7px;cursor:pointer;font-size:13px;line-height:1;color:var(--dsw-alias-label-primary);min-width:0;position:relative;box-sizing:border-box;transition:background-color .1s ease}
.idebar-menu-row:hover{background:var(--dsw-alias-interactive-bg-hover)}
.idebar-menu-row.idebar-selected{background:var(--dsw-alias-interactive-bg-hover)}
.idebar-menu-row.idebar-selected .idebar-row-icon{color:var(--dsw-alias-brand-primary)}
.idebar-menu-row .idebar-row-icon{width:16px;height:16px;display:inline-flex;flex:none;color:var(--dsw-alias-label-tertiary)}
.idebar-menu-row .idebar-row-name{flex:1;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.idebar-menu-row .idebar-chip{font-size:11px;line-height:1;color:var(--dsw-alias-label-secondary);background:var(--dsw-alias-interactive-bg-hover);border-radius:10px;padding:3px 7px;flex:none}
.idebar-ws-row{display:flex;align-items:center;gap:8px;height:34px;padding:0 8px;border-radius:7px;cursor:pointer;font-size:13px;color:var(--dsw-alias-label-primary);min-width:0;position:relative;box-sizing:border-box;transition:background-color .1s ease}
.idebar-ws-row:hover{background:var(--dsw-alias-interactive-bg-hover)}
.idebar-ws-row.idebar-selected{background:var(--dsw-alias-interactive-bg-hover)}
.idebar-ws-row.idebar-selected .idebar-row-icon{color:var(--dsw-alias-brand-primary)}
.idebar-ws-row .idebar-row-icon{width:16px;height:16px;display:inline-flex;flex:none;color:var(--dsw-alias-label-tertiary)}
.idebar-ws-row .idebar-row-name{flex:1;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:13px;line-height:1}
.idebar-ws-row .idebar-chip{font-size:11px;line-height:1;color:var(--dsw-alias-label-secondary);background:var(--dsw-alias-interactive-bg-hover);border-radius:10px;padding:3px 7px;flex:none}
.idebar-ws-row .idebar-row-actions{display:none;gap:2px;flex:none;margin-left:2px}
.idebar-ws-row:hover .idebar-row-actions{display:inline-flex}
.idebar-sep{border-top:1px solid var(--dsw-alias-border-base);margin:4px 2px}
.idebar-icon-btn{background:none;border:none;color:var(--dsw-alias-label-secondary);cursor:pointer;border-radius:6px;padding:3px 7px;font-size:12px;line-height:1.5;display:inline-flex;align-items:center;gap:4px}
.idebar-icon-btn:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}
.idebar-icon-btn.idebar-danger{color:var(--dsw-alias-state-error-primary)}
.idebar-rename-input{flex:1;min-width:0;background:var(--dsw-alias-bg-base);border:1px solid var(--dsw-alias-border-l2);border-radius:7px;color:var(--dsw-alias-label-primary);font-size:12px;padding:4px 8px;outline:none;height:26px}
.idebar-rename-input:focus{border-color:var(--dsw-alias-brand-primary)}
.idebar-error{font-size:11px;color:var(--dsw-alias-state-error-primary);padding:4px 10px;flex:none}
.idebar-search{display:flex;align-items:center;gap:7px;height:32px;padding:0 10px;border-radius:9px;background:var(--dsw-alias-bg-base);border:1px solid var(--dsw-alias-border-l1);flex:none;box-sizing:border-box;transition:border-color .12s ease}
.idebar-search:focus-within{border-color:var(--dsw-alias-brand-primary)}
.idebar-search input{flex:1;min-width:0;background:transparent;border:none;outline:none;color:var(--dsw-alias-label-primary);font-size:12px;padding:0}
.idebar-search input::placeholder{color:var(--dsw-alias-label-tertiary)}
.idebar-search-icon{display:inline-flex;color:var(--dsw-alias-label-tertiary);flex:none}
.idebar-newbtn{display:flex;align-items:center;justify-content:center;gap:6px;height:30px;border-radius:8px;border:1px dashed var(--dsw-alias-border-l2);background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer;font-size:12px;flex:none;box-sizing:border-box;transition:color .12s ease,border-color .12s ease,background-color .12s ease}
.idebar-newbtn:hover{color:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-label-tertiary);background:var(--dsw-alias-interactive-bg-hover)}
.idebar-newbtn svg{width:13px;height:13px}
.idebar-list{flex:1;min-height:0;overflow-y:auto;display:flex;flex-direction:column;gap:1px;padding:2px 0 10px}
.idebar-list::-webkit-scrollbar{width:8px}
.idebar-list::-webkit-scrollbar-thumb{background:var(--dsw-alias-border-l2);border-radius:4px;border:2px solid transparent;background-clip:content-box}
.idebar-row{display:flex;align-items:center;gap:0;height:32px;padding:0 8px;border-radius:8px;cursor:pointer;flex:none;min-width:0;font-size:13px;color:var(--dsw-alias-label-primary);box-sizing:border-box;animation:idebar-row-in .15s ease}
@keyframes idebar-row-in{0%{opacity:0}}
.idebar-row:hover,.idebar-row.idebar-current{background:var(--dsw-alias-interactive-bg-hover)}
.idebar-slot{width:16px;height:20px;display:inline-flex;align-items:center;justify-content:flex-start;flex:none}
.idebar-row .idebar-title{margin:0 6px 0 4px;flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.idebar-row .idebar-row-action{opacity:0;background:none;border:none;color:var(--dsw-alias-label-secondary);cursor:pointer;border-radius:6px;padding:3px 6px;font-size:11px;flex:none;transition:opacity .1s ease}
.idebar-row:hover .idebar-row-action{opacity:1}
.idebar-row-action:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}
.idebar-dot{width:7px;height:7px;border-radius:50%;flex:none;box-sizing:border-box}
.idebar-dot-pending{background:var(--dsw-alias-state-warn-primary);box-shadow:0 0 0 3px color-mix(in srgb,var(--dsw-alias-state-warn-primary) 16%,transparent);animation:idebar-pulse 1.2s infinite}
.idebar-dot-done{background:var(--dsw-alias-brand-primary)}
.idebar-dot-none{border:1px solid var(--dsw-alias-border-l2)}
.idebar-empty{display:flex;flex-direction:column;align-items:center;gap:10px;padding:30px 14px;color:var(--dsw-alias-label-secondary);font-size:12px;text-align:center}
.idebar-search-row{display:flex;flex-direction:column;gap:1px;justify-content:center;align-items:stretch;padding:0 8px;height:auto;min-height:46px}
.idebar-search-row .idebar-snippet{font-size:11px;color:var(--dsw-alias-label-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;margin-left:20px}
.idebar-ws-empty{font-size:12px;color:var(--dsw-alias-label-secondary);padding:10px 8px;text-align:center;flex:none}
`;

		const STORAGE_KEY = "dsh-ide-sidebar:selected";

		const ensureCss = () => {
			if (typeof document === "undefined") return;
			if (document.getElementById("dsh-ide-sidebar-css")) return;
			const tag = document.createElement("style");
			tag.id = "dsh-ide-sidebar-css";
			tag.textContent = CSS;
			document.head.appendChild(tag);
		};

		const inject = ["slots", "sessions", "workspaces"];

		function apply(ctx) {
			ensureCss();

			const el = React.createElement;

			const svg = (name) => {
				const common = { viewBox: "0 0 16 16", width: 14, height: 14, fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };
				const paths = {
					folder: [el("path", { d: "M2 3.5h4l1.6 1.6H14a.5.5 0 0 1 .5.5v6.9" }), el("path", { d: "M2 4.5v8h12" })],
					check: [el("path", { d: "M3 8.5 6 11.5 13 4.5" })],
					chevron: [el("path", { d: "M4 6l4 4 4-4" })],
					search: [el("circle", { cx: 7, cy: 7, r: 4 }), el("path", { d: "m10 10 3.5 3.5" })],
					plus: [el("path", { d: "M8 3v10M3 8h10" })],
					layers: [el("path", { d: "M8 2.5 2.5 5.5 8 8.5l5.5-3-5.5-3Z" }), el("path", { d: "M2.5 8.5 8 11.5l5.5-3" })]
				};
				return el("svg", common, paths[name] || null);
			};

			const actions = () => ({
				open: (id) => ctx.sessions.open(id),
				startSession: (wsId) => ctx.workspaces.startSession(wsId),
				searchSessions: async (query, signal) => {
					const r = await ctx.sessions.search(query, signal);
					if (!r.ok) throw new Error((r.error && r.error.message) || "search failed");
					return r.value;
				},
				searchResultLimit: ctx.sessions.searchResultLimit || 20,
				createWorkspace: (input) => ctx.workspaces.create(input),
				renameWorkspace: (wsId, title) => ctx.workspaces.rename(wsId, title),
				deleteWorkspace: (wsId) => ctx.workspaces.delete(wsId),
				archiveSession: (id) => ctx.workspaces.archiveSession(id),
				pickDirectory: () => ctx.workspaces.pickDirectory()
			});

			ctx.slots.inject("sidebar.workspaces", () =>
				ctx.slots.register(
					{ name: "sidebar.workspaces", priority: -1, inject: actions },
					IdeSidebar
				)
			);

			function IdeSidebar(props) {
				const useSessions = props.useSessions;
				const useWorkspaces = props.useWorkspaces;
				const open = props.open;
				const startSession = props.startSession;
				const searchSessions = props.searchSessions;
				const searchResultLimit = props.searchResultLimit || 20;
				const createWorkspace = props.createWorkspace;
				const renameWorkspace = props.renameWorkspace;
				const deleteWorkspace = props.deleteWorkspace;
				const archiveSession = props.archiveSession;
				const pickDirectory = props.pickDirectory;

				const sessionsSnap = useSessions((s) => s);
				const workspacesList = useWorkspaces((w) => w);
				const wsItems = workspacesList && workspacesList.items ? workspacesList.items : [];
				const archivedIds = workspacesList && workspacesList.archivedSessionIds ? workspacesList.archivedSessionIds : [];
				const wsReady = workspacesList ? !!workspacesList.baselinesReady : false;

				const [selected, setSelected] = React.useState({ kind: "all" });
				const [panelMode, setPanelMode] = React.useState("closed");
				const [anchor, setAnchor] = React.useState(null);
				const [query, setQuery] = React.useState("");
				const [wsQuery, setWsQuery] = React.useState("");
				const [results, setResults] = React.useState(null);
				const [busy, setBusy] = React.useState(false);
				const [wsError, setWsError] = React.useState("");
				const [renaming, setRenaming] = React.useState(null);
				const [deleteArmed, setDeleteArmed] = React.useState(null);
				const [draft, setDraft] = React.useState("");

				let suppressTil = 0;

				React.useEffect(() => {
					let saved = null;
					try { saved = window.localStorage.getItem(STORAGE_KEY); } catch (e) {}
					if (saved === "ungrouped") setSelected({ kind: "ungrouped" });
					else if (saved && saved !== "all") setSelected({ kind: "ws", wsId: saved });
				}, []);

				React.useEffect(() => {
					const value = selected.kind === "ws" ? selected.wsId : selected.kind === "ungrouped" ? "ungrouped" : "all";
					try { window.localStorage.setItem(STORAGE_KEY, value); } catch (e) {}
				}, [selected]);

				React.useEffect(() => {
					const q = query.trim();
					if (!q) { setResults(null); return; }
					let alive = true;
					const sig = { aborted: false };
					const timer = setTimeout(() => {
						searchSessions(q, sig).then((r) => { if (alive) setResults(r && r.items ? r.items : []); }).catch(() => { if (alive) setResults([]); });
					}, 260);
					return () => { alive = false; sig.aborted = true; clearTimeout(timer); };
				}, [query]);

				const sessions = sessionsSnap || {};
				const byId = sessions.byId || {};
				const current = sessions.current;
				const archivedSet = new Set(archivedIds);
				const wsOfSession = new Map();
				wsItems.forEach((w) => (w.sessionIds || []).forEach((id) => { if (!wsOfSession.has(id)) wsOfSession.set(id, w.workspaceId); }));

				const sessionRows = (scopeId) =>
					(sessions.ids || [])
						.map((id) => byId[id])
						.filter(Boolean)
						.filter((s) => !s.blank && s.origin !== "subagent" && !archivedSet.has(s.id))
						.filter((s) => { if (scopeId === "all") return true; if (scopeId === "ungrouped") return !wsOfSession.has(s.id); return wsOfSession.get(s.id) === scopeId; });

				const sevOf = (s) => { if (s.pendingInteraction) return 3; if (s.completed) return 1; return 0; };
				const dotClass = (sev) => sev === 3 ? "idebar-dot-pending" : sev === 1 ? "idebar-dot-done" : "idebar-dot-none";
				const badgeClass = (sev) => sev === 3 ? "idebar-badge-pending" : sev === 1 ? "idebar-badge-done" : "";

				const agg = (scopeId) => {
					const rows = sessionRows(scopeId);
					let max = 0, count = 0;
					rows.forEach((s) => { const sev = sevOf(s); if (sev > 0) { if (sev > max) max = sev; count += 1; } });
					return { max, count };
				};

				const scopeLabel = (scopeId) => {
					if (!scopeId || scopeId === "all") return "全部会话";
					if (scopeId === "ungrouped") return "未分类";
					const w = wsItems.find((x) => x.workspaceId === scopeId);
					return w ? w.title : "工作区";
				};

				const currentScope = selected.kind === "ws" ? selected.wsId : selected.kind === "ungrouped" ? "ungrouped" : "all";
				const scopeIds = ["all", "ungrouped"].concat(wsItems.map((w) => w.workspaceId));
				const elsewhere = scopeIds.filter((id) => id !== currentScope).map((id) => ({ id: id, ...agg(id) })).filter((x) => x.max > 0);
				const badge = elsewhere.reduce((acc, x) => ({ max: Math.max(acc.max, x.max), count: acc.count + x.count }), { max: 0, count: 0 });

				const closePanel = () => { setPanelMode("closed"); setWsQuery(""); suppressTil = Date.now() + 600; };

				const jumpWorkspace = (wsId) => {
					const rows = sessionRows(wsId).sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
					if (rows[0]) open(rows[0].id);
					else startSession(wsId);
				};

				const pickScope = (scopeId) => {
					if (scopeId === "all" || scopeId === "ungrouped") setSelected({ kind: scopeId === "all" ? "all" : "ungrouped" });
					else { setSelected({ kind: "ws", wsId: scopeId }); jumpWorkspace(scopeId); }
					closePanel();
				};

				const openSession = (id) => open(id);

				const addWorkspace = async () => {
					if (busy) return;
					setBusy(true);
					setWsError("");
					try {
						const path = await pickDirectory();
						if (!path) return;
						const view = await createWorkspace({ path });
						setSelected({ kind: "ws", wsId: view.workspaceId });
						closePanel();
					} catch (e) { setWsError((e && e.message) || "添加工作区失败"); }
					finally { setBusy(false); }
				};

				const startRename = (wsId, title) => { setRenaming(wsId); setDraft(title); setWsError(""); };
				const confirmRename = async () => {
					if (!renaming) return;
					const t = draft.trim();
					if (!t) return;
					try { await renameWorkspace(renaming, t); setRenaming(null); setDraft(""); setWsError(""); }
					catch (e) { setWsError((e && e.message) || "重命名失败"); }
				};
				const doDelete = async (wsId) => {
					try { await deleteWorkspace(wsId); if (selected.kind === "ws" && selected.wsId === wsId) setSelected({ kind: "all" }); setDeleteArmed(null); setWsError(""); }
					catch (e) { setWsError((e && e.message) || "删除工作区失败"); setDeleteArmed(null); }
				};

				const stop = (e) => e.stopPropagation();

				const menuRow = (scopeId) => {
					const a = agg(scopeId);
					const selectedNow = currentScope === scopeId;
					return el("div", { className: "idebar-menu-row" + (selectedNow ? " idebar-selected" : ""), onClick: () => pickScope(scopeId) },
						el("span", { className: "idebar-row-icon" }, scopeId === "all" ? svg("layers") : svg("folder")),
						el("span", { className: "idebar-row-name" }, scopeLabel(scopeId)),
						a.count > 0 ? el("span", { className: "idebar-chip" }, String(a.count)) : null,
						selectedNow ? el("span", { className: "idebar-row-icon" }, svg("check")) : null
					);
				};

				const workspaceMenuRow = (w) => {
					const selectedNow = currentScope === w.workspaceId;
					if (renaming === w.workspaceId) {
						return el("div", { className: "idebar-ws-row" },
							el("input", { className: "idebar-rename-input", value: draft, onChange: (e) => setDraft(e.target.value),
								onKeyDown: (e) => { if (e.key === "Enter") confirmRename(); if (e.key === "Escape") setRenaming(null); },
								autoFocus: true, placeholder: "工作区名称" }),
							el("button", { className: "idebar-icon-btn", onClick: stop }, "✓"),
							el("button", { className: "idebar-icon-btn", onClick: stop }, "✕")
						);
					}
					const a = agg(w.workspaceId);
					const armed = deleteArmed === w.workspaceId;
					return el("div", { className: "idebar-ws-row" + (selectedNow ? " idebar-selected" : ""), onClick: () => pickScope(w.workspaceId), onMouseLeave: () => setDeleteArmed(null) },
						el("span", { className: "idebar-row-icon" }, svg("folder")),
						el("span", { className: "idebar-row-name" }, w.title),
						a.count > 0 ? el("span", { className: "idebar-chip" }, String(a.count)) : null,
						selectedNow ? el("span", { className: "idebar-row-icon" }, svg("check")) : null,
						el("span", { className: "idebar-row-actions" }, [
							el("button", { className: "idebar-icon-btn", onClick: (e) => { e.stopPropagation(); startRename(w.workspaceId, w.title); } }, "重命名"),
							el("button", { className: "idebar-icon-btn idebar-danger", onClick: (e) => { e.stopPropagation(); if (armed) doDelete(w.workspaceId); else setDeleteArmed(w.workspaceId); } }, armed ? "确认删除" : "删除")
						])
					);
				};

				const sessionRow = (s) => {
					const sev = sevOf(s);
					const isCurrent = current === s.id;
					return el("div", { className: "idebar-row" + (isCurrent ? " idebar-current" : ""), onClick: () => openSession(s.id), key: s.id },
						el("span", { className: "idebar-slot" }, el("span", { className: "idebar-dot " + dotClass(sev) })),
						el("span", { className: "idebar-title" }, s.displayTitle || s.title || s.id),
						el("button", { className: "idebar-row-action", onClick: (e) => { e.stopPropagation(); archiveSession(s.id); } }, "归档")
					);
				};

				const searchResultRow = (item) => {
					const s = byId[item.sessionId];
					return el("div", { className: "idebar-row idebar-search-row", onClick: () => openSession(item.sessionId), key: item.sessionId },
						el("span", { className: "idebar-slot" }),
						el("span", { className: "idebar-title" }, s ? s.displayTitle || s.title : item.sessionId),
						el("span", { className: "idebar-snippet" }, item.snippet || "")
					);
				};

				const showSearch = !!query.trim();

				const searchRow = el("div", { className: "idebar-search" },
					el("span", { className: "idebar-search-icon" }, svg("search")),
					el("input", { type: "text", placeholder: "搜索会话…", value: query, onChange: (e) => setQuery(e.target.value),
						onKeyDown: (e) => { if (e.key === "Escape") setQuery(""); } }),
					query ? el("button", { className: "idebar-icon-btn", onClick: () => setQuery("") }, "✕") : null
				);

				let body;
				if (!wsReady && !wsItems.length) {
					body = el("div", { className: "idebar-empty" }, "加载中…");
				} else if (showSearch) {
					const rs = results || [];
					body = rs.length === 0
						? el("div", { className: "idebar-empty" }, query.trim() ? "没有匹配的会话" : "输入关键词搜索会话内容…")
						: el("div", { className: "idebar-list" }, rs.slice(0, searchResultLimit).map(searchResultRow));
				} else {
					const rows = sessionRows(currentScope).sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
					body = rows.length === 0
						? el("div", { className: "idebar-empty" }, "「" + scopeLabel(currentScope) + "」下还没有会话")
						: el("div", { className: "idebar-list" }, rows.map(sessionRow));
				}

				const switcherChildren = [ el("span", { className: "idebar-name" }, scopeLabel(currentScope)) ];
				if (badge.max > 0) {
					switcherChildren.push(el("span", { className: "idebar-badge " + badgeClass(badge.max), title: "其他工作区有 " + badge.count + " 个待处理会话" }, String(badge.count > 99 ? "99+" : badge.count)));
				}
				switcherChildren.push(el("span", { className: "idebar-caret" }, svg("chevron")));

				const wq = wsQuery.trim().toLowerCase();
				const shownWs = wq ? wsItems.filter((w) => w.title.toLowerCase().indexOf(wq) >= 0) : wsItems;

				const dropdown = el("div", {
					className: "idebar-panel" + (panelMode !== "closed" ? " idebar-panel-open" : ""),
					style: anchor ? { left: anchor.left + "px", top: anchor.top + "px", maxHeight: "calc(100vh - " + anchor.top + "px - 24px)" } : null,
					onClick: stop
				}, [
					el("div", { className: "idebar-panel-search" }, [
						svg("search"),
						el("input", { type: "text", placeholder: "搜索工作区…", value: wsQuery, onChange: (e) => setWsQuery(e.target.value),
							onKeyDown: (e) => { if (e.key === "Escape") setWsQuery(""); } }),
						wsQuery ? el("button", { className: "idebar-icon-btn", onClick: () => setWsQuery("") }, "✕") : null
					]),
					menuRow("all"),
					menuRow("ungrouped"),
					el("div", { className: "idebar-sep" }),
					el("div", { className: "idebar-list" }, shownWs.map(workspaceMenuRow)),
					wq && shownWs.length === 0 ? el("div", { className: "idebar-ws-empty" }, "没有匹配的工作区") : null,
					el("div", { className: "idebar-sep" }),
					el("button", { className: "idebar-newbtn", style: { width: "100%" }, onClick: (e) => { e.stopPropagation(); addWorkspace(); } },
						busy ? "添加中…" : [svg("plus"), el("span", null, "添加工作区")]),
					wsError ? el("div", { className: "idebar-error" }, wsError) : null
				]);

				const measureAnchor = (e) => {
					try { const r = e.currentTarget.getBoundingClientRect(); setAnchor({ left: r.left, top: r.bottom }); } catch (err) {}
				};

				return el("div", { className: "idebar-root" }, [
					el("div", {
						className: "idebar-switcher" + (panelMode !== "closed" ? " idebar-open" : ""),
						onMouseEnter: (e) => { if (Date.now() < suppressTil) return; measureAnchor(e); setPanelMode((m) => (m === "closed" ? "hover" : m)); },
						onMouseLeave: () => { setPanelMode((m) => (m === "pinned" ? m : "closed")); },
						onClick: (e) => { measureAnchor(e); setPanelMode((m) => (m === "closed" ? "pinned" : "closed")); }
					}, [...switcherChildren, dropdown]),
					searchRow,
					wsError ? el("div", { className: "idebar-error" }, wsError) : null,
					body
				]);
			}
		}

		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});