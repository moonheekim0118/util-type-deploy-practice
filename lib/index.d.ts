import { ReactNode } from "react";
export declare type PropsWithReactNodeChildren<P = unknown> = P & {
    children: ReactNode;
};
export declare type PropsWithFunctionChildren<P = unknown> = P & {
    children: (args: any) => any;
};
