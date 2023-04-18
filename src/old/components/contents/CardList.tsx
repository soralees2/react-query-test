import { itemType } from "../../types";
import { CardItem } from "./CardItem";

export const CardList = (props: { list: itemType[] }) => {
  return (
    <>
      {props.list.map((i, idx) => {
        return <CardItem item={i} key={idx} />;
      })}
    </>
  );
};
