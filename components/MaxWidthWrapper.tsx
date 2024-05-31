import { cn } from "../lib/utils";

type MaxWidthWrapperProps = {
  classname?: string;
  children: React.ReactNode;
};

const MaxWidthWrapper = (props: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        props.classname
      )}
    >
      {props.children}
    </div>
  );
};

export default MaxWidthWrapper;
