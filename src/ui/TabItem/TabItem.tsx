import "./styles.scss";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  selected: boolean;
  children: React.ReactNode;
}

function TabItem({ selected, children, ...rest }: Props) {
  return (
    <div
      {...rest}
      className={["nav-item", selected ? "nav-item__selected" : ""].join(" ")}
    >
      {children}
    </div>
  );
}
export default TabItem;
