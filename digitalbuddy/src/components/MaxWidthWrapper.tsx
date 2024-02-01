import { stringify } from "querystring";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-2.5 md:px-12 bg-gray-100">
      {children}
    </div>
  );
};
export default MaxWidthWrapper;
