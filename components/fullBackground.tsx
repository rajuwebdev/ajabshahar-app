import React, { ReactNode } from "react";
import "../styles/CustomStyle.css";

type FullBackgroundProps = {
  children?: ReactNode;
};

export default function FullBackground({ children }: FullBackgroundProps) {
  return <div className="full-background">{children}</div>;
}
