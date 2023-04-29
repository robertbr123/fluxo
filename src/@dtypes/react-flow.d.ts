import "reactflow";
import { Node, Edge } from "reactflow";

declare module "reactflow" {
    export interface NodeFttx extends Node {
        fttx: {
            ports?: Array<{
                port: number;
                loss: number;
                used: boolean;
            }>;
            unbalanced?: boolean;
            meters?: number;
        };
    }
}
