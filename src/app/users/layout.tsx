import WrapperRedux from "../wrapper/WrapperRedux";
import NavbarUser from "./navbar";
export default function Layout(props: {
  children: React.ReactNode;
}) {
  return (
    <WrapperRedux>
      {<NavbarUser />}
      {props.children}
    </WrapperRedux>
  );
}