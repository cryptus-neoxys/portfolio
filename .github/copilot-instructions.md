This repository is an Electron + React + TypeScript app with a main process (src/main), two renderer UIs (topbar and sidebar) and a built-in LLM client used by the sidebar.

Quick context (keep short):

- Main process: `src/main/*` (Window, EventManager, Menu, LLMClient). EventManager registers all IPC handlers.
- Renderer: `src/renderer/topbar` and `src/renderer/sidebar`. Each exposes a small API from the preload scripts (`src/preload/topbar.ts`, `src/preload/sidebar.ts`).
- LLM integration: `src/main/LLMClient.ts` reads API keys from `.env` (OPENAI_API_KEY or ANTHROPIC_API_KEY) and streams text to the sidebar via IPC channels `chat-response` and `chat-messages-updated`.

What to know when coding here:

- Use the preload-exposed APIs rather than calling ipcRenderer directly in renderers. Example names: `window.topBarAPI.*` and `window.sidebarAPI.*` (see `src/preload/*.ts`).
- IPC contract examples:
  - Create tab: `topBarAPI.createTab(url)` -> handled in `EventManager.handleTabEvents` as `create-tab`.
  - Sidebar chat: `sidebarAPI.sendChatMessage({ message, messageId })` -> handled by `sidebar-chat-message` and routed to `LLMClient.sendChatMessage`.
  - Streaming responses: renderer listens with `sidebarAPI.onChatResponse(callback)` and `sidebarAPI.onMessagesUpdated(callback)`.

Build / dev / debug commands (verified in `package.json`):

- Install: `pnpm install`
- Dev (hot reload Electron + renderer): `pnpm dev` (uses `electron-vite`)
- Build: `pnpm build` (runs type checks then `electron-vite build`)
- Run preview: `pnpm start` (runs `electron-vite preview`)

Important patterns and conventions:

- The main process owns app state for windows/tabs; renderer UIs are thin and use the Browser/Chat React contexts to call the preload APIs. See `src/renderer/topbar/src/contexts/BrowserContext.tsx` and `src/renderer/sidebar/src/contexts/ChatContext.tsx`.
- LLMClient composes a system prompt using page URL and truncated page text (see `buildSystemPrompt` in `src/main/LLMClient.ts`). When adding features that rely on page context (screenshots, extracted text), follow the same shape: `role: 'system' | 'user' | 'assistant'` and push messages into the tracked `messages` array.
- Streaming behavior: the main process uses a text stream and sends incremental updates. Renderer components expect partial chunks and final complete messages (fields: `messageId`, `content`, `isComplete`). Keep chunking behavior compatible.
- When modifying IPC handler names or payload shapes, update both `src/preload/*` and `EventManager` handler names together.

Where to look for examples:

- Main process IPC wiring and handlers: `src/main/EventManager.ts`
- LLM usage and streaming contract: `src/main/LLMClient.ts`
- Preload and exposed APIs: `src/preload/topbar.ts`, `src/preload/sidebar.ts`
- Renderer consumers: `src/renderer/topbar/src/contexts/BrowserContext.tsx`, `src/renderer/sidebar/src/components/Chat.tsx`

Small rules for code edits an AI should follow:

- Keep changes minimal and isolated: prefer adding new IPC channels over changing existing ones unless you update both preload + EventManager + all renderer callers.
- For any runtime behavior that depends on API keys, guard for missing keys and keep existing user-facing error messages (LLMClient logs a clear error when keys are missing).
- Preserve streaming semantics: always send partial chunks and a final `isComplete: true` message for each `messageId`.

If you need more context, open these first: `README.md` (dev commands), `package.json` (script names), `src/main/LLMClient.ts` (LLM contract), `src/preload/*` (renderer API surface), and `src/main/EventManager.ts` (IPC handlers).

If anything here is unclear, tell me which area you'd like expanded (build, IPC, LLM message shape, or renderer examples) and I will iterate.
