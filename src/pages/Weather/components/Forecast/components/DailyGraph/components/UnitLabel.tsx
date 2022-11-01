import { LabelProps } from "recharts";
import { withUnit } from "utils/units";

function UnitLabel(props: LabelProps) {
  return (
    <g>
      <text
        x={props.x}
        y={props.y}
        fill="#c9c9c9"
        dy={-15}
        dx={0}
        textAnchor="middle"
      >
        {withUnit(props.value, "temperature")}
      </text>
    </g>
  );
}
export default UnitLabel;
