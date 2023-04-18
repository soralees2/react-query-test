import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import React, { useEffect, useMemo } from "react";
import { useState, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { fetchFn } from "../api/fetchFn";
import { itemType } from "../types";
import { CardList } from "./contents/CardList";

export const SectionTwo = () => {
  const { ref, inView } = useInView();
  const [nextId, setNextId] = useState<number>(8);
  const [itemList, setItemList] = useState<itemType[]>();

  const {
    fetchNextPage,
    hasNextPage,
    status,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
    fetchPreviousPage,
  } = useInfiniteQuery({
    queryKey: ["cards"],
    queryFn: async () => {
      return await fetchFn(nextId, nextId + 6).then((i) => {
        const nextCursor = nextId + 6;
        const previousCursor = nextId;
        setNextId(nextCursor);
        setItemList(i);
        if (i.length === 0) {
          return {};
        } else {
          const nextCursor = nextId + 6;
          const previousCursor = nextId;
          setNextId(nextCursor);
          setItemList(i);
          return { nextCursor, previousCursor, i };
        }
      });
    },
    getPreviousPageParam: (data) => {
      return data.previousCursor ?? undefined;
    },
    getNextPageParam: (data) => {
      return data.nextCursor ?? undefined;
    },
    enabled: false,
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
      console.log("isFetchingNextPage: ", isFetchingNextPage);
    }
  }, [inView]);

  const getCardListView = useMemo(() => {
    if (itemList && itemList.length > 0) {
      return <CardList list={itemList} />;
    } else {
      return null;
    }
  }, [itemList]);

  return (
    <section>
      <h1>Scroll!</h1>
      <div className="card-wrap">
        {status === "success" && hasNextPage ? getCardListView : null}
        <div
          ref={ref}
          style={{
            marginTop: 160,
            border: "1px solid #000",
            textAlign: "center",
          }}
        >
          <h1>Touch!</h1>
        </div>
      </div>
    </section>
  );
};
