import React, { useState, useEffect, useContext } from "react";
import { Pack } from "@potion/layout";
import { Svg, Circle } from "@potion/element";
import { BubbleContext } from "./context/bubbleContext";

const Bubbles = ({ colors }) => {
  const { bubbleState } = useContext(BubbleContext);
  const [bubbleData, setBubbleData] = useState([]);
  useEffect(() => {
    const generateBubbleData = bubbleState.colors.map((_, i) => ({
      value: Math.floor(Math.random() * (bubbleState.colors.length * 2)) + 1,
      key: `${i + 1}`
    }));
    setBubbleData(generateBubbleData);
  }, [bubbleState.colors]);

  return (
    <div className='bubble-wrap'>
      <p>bubbles</p>
      <Svg width={400} height={400}>
        <Pack
          data={{
            children: bubbleData
          }}
          sum={datum => datum.value}
          size={[400, 400]}
          includeRoot={false}
          nodeEnter={d => ({ ...d, r: 0 })}
          animate
        >
          {nodes =>
            nodes
              .map(({ x, y, r, key }, i) => {
                if (i < bubbleState.colors.length) {
                  return (
                    <Circle
                      key={key}
                      cx={x}
                      cy={y}
                      r={r}
                      fill={bubbleState.colors[i].code.hex}
                    />
                  );
                }
                return null;
              })
              .filter(v => v)
          }
        </Pack>
      </Svg>
    </div>
  );
};

export default Bubbles;
