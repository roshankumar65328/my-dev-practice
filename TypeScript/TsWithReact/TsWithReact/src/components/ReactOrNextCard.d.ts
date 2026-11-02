import type { PropsWithChildren, ReactNode } from "react";
interface CardProps extends PropsWithChildren {
    title: string;
    footer?: ReactNode;
}
export declare function ReactOrNextCard({ title, children, footer }: CardProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=ReactOrNextCard.d.ts.map