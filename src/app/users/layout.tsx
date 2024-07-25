export default function Layout(props: {
    coba: React.ReactNode;
    children: React.ReactNode;
  }) {
    return (
      <>
        {props.coba}
        {props.children}
      </>
    );
  }