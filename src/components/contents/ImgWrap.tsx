import { useMemo } from "react";

export const ImgWrap = () => {
  const ImgWrap = useMemo(() => {
    return <img src="https://dummyimage.com/10/666666/fffffff" alt="" />;
  }, []);
  return <>{ImgWrap}</>;
};
