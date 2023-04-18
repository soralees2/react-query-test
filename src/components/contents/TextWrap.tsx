import { useMemo } from "react";

export const TextWrap = (props: { txt: string }) => {
  const getTextWrap = useMemo(() => {
    // return <div className="txtarea">{props.txt}</div>;
    return <div className="txtarea">{props.txt}</div>;
  }, [props.txt]);
  return <>{getTextWrap}</>;
};
