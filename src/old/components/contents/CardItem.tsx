import { itemType } from "../../types";
import { ImgWrap } from "./ImgWrap";
import { TextWrap } from "./TextWrap";

export const CardItem = (props: { item: itemType }) => {
  return (
    <div className="card-item">
      <ImgWrap />
      <TextWrap txt={props.item.body} />
    </div>
  );
};
