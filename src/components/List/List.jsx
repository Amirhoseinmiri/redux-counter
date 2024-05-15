import { ListItem } from "../ListItem/ListItem";

export function List({ items }) {
  return (
    <div style={{ overflowY: "auto", height: "40%" }}>
      <table className="table table-hover table-borderless">
        <tbody>
          {items.map((item, i) => (
            <ListItem key={i} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
