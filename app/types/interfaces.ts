import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactNode } from "react";

export interface PropsPopover {
    children: ReactNode;
    childProp?: string;
    title?:string;
    logo:string;
    experience:string;
    id?:number;
}