const Layout = (props) => {
  return (
    <>
      {props.modal}
      {props.children}
    </>
  );
};

export default Layout;
