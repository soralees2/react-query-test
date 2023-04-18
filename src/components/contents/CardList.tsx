import { useMemo } from "react";
import { itemType } from "../../types";
import { CardItem } from "./CardItem";

export const CardList = (props: { list: itemType[] }) => {
  const getCardItems = useMemo(() => {
    return props.list.map((i, idx) => {
      return <CardItem item={i} key={idx} />;
    });
  }, [props.list]);
  return <>{getCardItems}</>;
};
