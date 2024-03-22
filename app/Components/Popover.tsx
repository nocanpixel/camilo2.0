import React, { useState } from "react";
import { PropsPopover } from "../types/interfaces";
import {
  autoUpdate,
  flip,
  offset,
  shift,
  useFloating,
  useHover,
  useInteractions,
} from "@floating-ui/react";
import { StyledPopover } from "../styles/components/Popover";

export const Popover: React.FC<PropsPopover> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isLoading, setIsloading] = useState(true);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(10),
      flip({ fallbackAxisSideDirection: "end" }),
      shift({ padding: 23 }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  return (
    <>
      {React.cloneElement(props.children as React.ReactElement, {
        ref: refs.setReference,
        ...getReferenceProps(),
        childProp: props.childProp, // Pass childProp to child components
      })}
      {isOpen && (
          <StyledPopover
            // className={`${isLoading ? "blur-sm" : "ring ring-gray-600"}`}
            className="ring-2 ring-purple-300"
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            <div className={props.id === 3 ? "w-20" : "w-10"}>
              {/* <Image
                priority
                className="rounded-md"
                src={props.logo}
                height={500}
                width={500}
                alt={"javascript"}
                onLoadingComplete={() => setIsloading(false)}
              /> */}
            </div>
            {/* <span className="text-2xl font-bold">{props.title}</span> */}
            <span className="flex items-center gap-2">
              <span className="text-4xl font-bold">{props.experience}</span>{" "}
              <span className="text-gray-500 ">{`year${parseInt(props.experience) > 1 ? "s" : ""
                } of experience.`}</span>
            </span>
          </StyledPopover>
      )}
    </>
  );
};
