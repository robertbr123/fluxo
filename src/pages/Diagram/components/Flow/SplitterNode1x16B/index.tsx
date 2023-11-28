import { Handle, Position } from "reactflow";
import { SplitterStyled } from "./style";
interface SplitterNode1x16BProps {
    data: {};
    id: string;
}

export function SplitterNode1x16B({ data, id }: SplitterNode1x16BProps) {
    return (
        <SplitterStyled>
            <svg width="250" height="200">
                <polygon
                    points="125,0 0,199 250,199"
                    fill="white"
                    stroke="black"
                />
                <text
                    x="70"
                    y="175"
                    style={{
                        fontFamily: "Arial",
                        fontSize: "40px",
                        fill: "black",
                    }}
                >
                    1x16B
                </text>
            </svg>

            <Handle type="target" position={Position.Top} isConnectable />
            {new Array(16).fill(0).map((_, index) => (
                <Handle
                    type="source"
                    key={`port$-${index + 1}`}
                    id={`port$-${index + 1}`}
                    position={Position.Bottom}
                    style={{
                        left: `${index * (100 / 16) + 100 / 16 / 2}%`,
                    }}
                    isConnectable
                />
            ))}
        </SplitterStyled>
    );
}
