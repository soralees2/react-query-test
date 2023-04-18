import { useQuery } from "@tanstack/react-query";
import { useState, useCallback } from "react";
import { fetchFn } from "../api/fetchFn";
import { itemType } from "../types";
import { CardList } from "./contents/CardList";

export const SectionTwo = () => {
  const [itemList, setItemList] = useState<itemType[]>();
  const [activeState, setActiveState] = useState<boolean>(false);

  const { status } = useQuery({
    queryKey: ["test"],
    queryFn: async () => {
      return await fetchFn().then((i) => {
        setItemList(i);
        return i;
      });
    },
    enabled: activeState,
  });

  const onClickTxt = useCallback(() => {
    setActiveState(true);
  }, []);

  return (
    <section>
      <h1 onClick={onClickTxt}>Click!</h1>
      <div className="card-wrap">
        {status === "success" ? itemList && <CardList list={itemList} /> : null}
      </div>
    </section>
  );
};
