"use client";
import WrapperRedux from "../wrapper/WrapperRedux";
export default function Layout(props: {
  children: React.ReactNode;
}) {
  return (
    <WrapperRedux>
      {props.children}
    </WrapperRedux>
  );
}