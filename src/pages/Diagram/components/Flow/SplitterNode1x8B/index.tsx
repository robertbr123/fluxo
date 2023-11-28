import { Handle, Position } from "reactflow";
import { SplitterStyled } from "./style";
interface SplitterNode1x8BProps {
    data: {};
    id: string;
}

export function SplitterNode1x8B({ data, id }: SplitterNode1x8BProps) {
    return (
        <SplitterStyled>
            <svg width="150" height="120">
                <polygon
                    points="75,0 0,119 150,119"
                    fill="white"
                    stroke="black"
                />
                <text
                    x="50"
                    y="105"
                    style={{
                        fontFamily: "Arial",
                        fontSize: "24px",
                        fill: "black",
                    }}
                >
                    1x8B
                </text>
            </svg>

            <Handle type="target" position={Position.Top} isConnectable />
            {new Array(8).fill(0).map((_, index) => (
                <Handle
                    type="source"
                    key={`port$-${index + 1}`}
                    id={`port$-${index + 1}`}
                    position={Position.Bottom}
                    style={{
                        left: `${index * (100 / 8) + 100 / 8 / 2}%`,
                    }}
                    isConnectable
                />
            ))}
        </SplitterStyled>
    );
}