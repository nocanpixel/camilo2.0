import React from "react";
import { IconLike } from "../Icon/Icons";
import { useLike } from "../hooks/useLike";
import { useStore } from "../hooks/useStore";

export const LikeButton = () => {
  const [state, setState] = React.useState(false);
  const { fetchPostLike } = useLike();
  const { data } = useStore();

  const action = () => {
    setState((prev) => !prev);
    if(data.message.register){return;}
    fetchPostLike();
  }

  React.useEffect(() => {
    let timeoutId:any;
    if (state) {
      timeoutId = setTimeout(() => {
        setState(false);
      }, 350);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [state]);

  return (
    <IconLike
      like={data&&data.message.register}
      state={state}
      onClick={action}
    />
  );
};
