import React, { useRef, useCallback, useState } from "react";

import Item from "../item/Item.jsx";
import useMain from "./useMain.js";
import * as S from "./components";

const Main = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  const observer = useRef();

  const { list, hasMore, loading } = useMain(pageNumber, pageSize);

  const lastItem = useCallback((node) => {
    if (loading) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber((prev) => prev + 1);
      }
    });

    if (node) observer.current.observe(node);
  });

  return (
    <S.Body>
      <S.List>
        {list.map((item, index) => {
          if (list?.length === index + 1) {
            return <Item item={item} lastItem={lastItem} key={item.prefix} />;
          } else {
            return <Item item={item} key={item.prefix + item.lastName} />;
          }
        })}
      </S.List>
    </S.Body>
  );
};

export default Main;
