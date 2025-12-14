/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_Gemini_API_Key: string
  // add other VITE_ variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}