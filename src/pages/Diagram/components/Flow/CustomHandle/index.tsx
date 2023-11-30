import { randomUUID } from 'crypto';
import React, { useMemo } from 'react';
import { getConnectedEdges, Handle, HandleProps, useNodeId, useStore } from 'reactflow';


const selector = (s: any) => ({
    nodeInternals: s.nodeInternals,
    edges: s.edges,
});


export default function CustomHandle(props:any){
    const { nodeInternals, edges } = useStore(selector);
    const nodeId = useNodeId();

    const isHandleConnectable = useMemo(() => {
        if (typeof props.isConnectable === 'function') {
            const node = nodeInternals.get(nodeId);
            const connectedEdges = getConnectedEdges([node], edges);
            return props.isConnectable({ node, connectedEdges });
        }

        if (typeof props.isConnectable === 'number') {
            const node = nodeInternals.get(nodeId);
            const connectedEdges = getConnectedEdges([node], edges);
            let connectedEdgesInHandle = []
            if(props.type==="source"){
                connectedEdgesInHandle = connectedEdges.filter((edge)=>edge.sourceHandle===props.id)
            }
            else{
                connectedEdgesInHandle = connectedEdges.filter((edge)=>edge.targetHandle===props.id)

            }
            return props.isConnectable > connectedEdgesInHandle.length;
        }

        return props.isConnectable;
    }, [nodeInternals, edges, nodeId, props.isConnectable]);

    return (
        <Handle {...props} isConnectable={isHandleConnectable}></Handle>
    );
};
