import { cn } from "@/lib/utils";
import { type PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren & {
  className?: string;
};

export function Container(props: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl", props.className)}>
      {props.children}
    </div>
  );
}

export default Container;
