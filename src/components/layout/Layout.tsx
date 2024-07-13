import Header from './header/Header';

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
