const Layout = (props) => {
  return (
    <div>
      {props.children}
      {props.right}
      {props.left}
    </div>
  );
};

export default Layout;
