import "./styles.scss";

interface Props {
  label: string;
  value: React.ReactNode;
}

function Row({ label, value }: Props) {
  return (
    <div className="row">
      <div className="row__label">{label}</div>
      <div className="row__value">{value}</div>
    </div>
  );
}
export default Row;
