import { useMemo } from "react";
import { itemType } from "../../types";
import { ImgWrap } from "./ImgWrap";
import { TextWrap } from "./TextWrap";

export const CardItem = (props: { item: itemType }) => {
  const getTextArea = useMemo(() => {
    return (
      <div className="card-item">
        {/* <ImgWrap /> */}
        <TextWrap txt={props.item.title} />
      </div>
    );
  }, [props.item.title]);
  return <>{getTextArea}</>;
};
