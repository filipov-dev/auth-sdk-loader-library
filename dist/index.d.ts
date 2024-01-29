export declare const loader: () => Promise<typeof window.FD.auth>;
declare const _default: {
    loader: () => Promise<{
        sendDataForVerifyHandler: ({ data: string, smartToken: string }: {
            data: any;
            smartToken: any;
        }) => Promise<void>;
        sendCodeVerifyHandler: ({ code: string, smartToken: string }: {
            code: any;
            smartToken: any;
        }) => Promise<string>;
    }>;
};
export default _default;
