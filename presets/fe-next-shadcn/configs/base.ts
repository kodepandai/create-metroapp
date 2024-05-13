export const baseConfig = {
  appName: process.env.NEXT_PUBLIC_APP_NAME || "Metro",
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  authStore: "metro.auth",
} as const;
