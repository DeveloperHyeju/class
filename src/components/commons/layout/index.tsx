import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

const HIDDEN_HAEDERS = [
  "/12-02-library-star",
  // ...
  // ...
  // ...
];

interface ILayoutPtops {
  children: JSX.Element;
}

const wrap = { height: "50rem", display: "flex" };

const sideBar = { width: "30%", backgroundColor: "orange" };

const contents = { width: "70%" };

const Layout = ({ children }: ILayoutPtops) => {
  const router = useRouter();

  const isHiddenHeader = HIDDEN_HAEDERS.includes(router.asPath);

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <div style={wrap}>
        <div style={sideBar}>사이드바</div>
        <div style={contents}>{children}</div>
      </div>
      <LayoutFooter />
    </>
  );
};

export default Layout;
