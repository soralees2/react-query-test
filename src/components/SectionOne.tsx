import { useState, useCallback } from "react";
import { fetchFn } from "../api/fetchFn";
import { itemType } from "../types";
import { CardList } from "./contents/CardList";

export const SectionOne = () => {
  const [itemList, setItemList] = useState<itemType[]>();

  /*  const onClickTxt = useCallback(() => {
    fetchFn().then((item) => {
      if (item && item.length > 0) {
        setItemList(item);
      }
    });
  }, []); */

  return (
    <section>
      {/* <h1>Scroll!</h1> */}
      <div className="card-wrap">
        {/* {itemList && <CardList list={itemList} />} */}
      </div>
    </section>
  );
};
