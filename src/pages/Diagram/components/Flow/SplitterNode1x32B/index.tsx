import { Handle, Position } from "reactflow";
import { SplitterStyled } from "./style";
interface SplitterNode1x32BProps {
    data: {};
    id: string;
}

export function SplitterNode1x32B({ data, id }: SplitterNode1x32BProps) {
    return (
        <SplitterStyled>
            <svg width="500" height="400">
                <polygon
                    points="250,0 0,399 500,399"
                    fill="white"
                    stroke="black"
                />
                <text
                    x="130"
                    y="350"
                    style={{
                        fontFamily: "Arial",
                        fontSize: "80px",
                        fill: "black",
                    }}
                >
                    1x32B
                </text>
            </svg>

            <Handle type="target" position={Position.Top} isConnectable />
            {new Array(32).fill(0).map((_, index) => (
                <Handle
                    type="source"
                    key={`port$-${index + 1}`}
                    id={`port$-${index + 1}`}
                    position={Position.Bottom}
                    style={{
                        left: `${index * (100 / 32) + 100 / 32 / 2}%`,
                    }}
                    isConnectable
                />
            ))}
        </SplitterStyled>
    );
}
