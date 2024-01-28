export type FD = {
  auth: {
    sendDataForVerifyHandler: ({ data: string, smartToken: string }) => Promise<void>,
    sendCodeVerifyHandler: ({ code: string, smartToken: string }) => Promise<string>,
  },
}

declare global {
  interface Window { FD: FD; }
}
