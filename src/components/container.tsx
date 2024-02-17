import { PropsWithChildren } from "react";

export const Container = ({ children }: PropsWithChildren) => {
  return <div className="max-w-2xl mx-auto p-2">{children}</div>;
};
