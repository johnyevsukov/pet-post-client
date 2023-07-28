import React, { useCallback, useState, useRef } from "react";
import { Outlet } from "react-router-dom";

import { useElementDimensions } from "../../../hooks/useElementDimensions";

import { SideNav } from "../../organisms/SideNav/SideNav";
import { MobileNav } from "../../organisms/MobileNav/MobileNav";
import { SearchBar } from "../../organisms/SearchBar/SearchBar";

import * as styles from "./styles";

export const LoggedInLayout: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const handleToggleMobileNav = useCallback(() => {
    setIsMobileNavOpen((state) => !state);
  }, []);

  const containerRef = useRef(null);
  const { width: containerWidth } = useElementDimensions(containerRef);

  return (
    <styles.LayoutWrapper>
      <SideNav />
      <MobileNav isOpen={isMobileNavOpen} />
      <styles.ContentWrapper>
        <styles.Content ref={containerRef}>
          {/* some sort of blur content on scroll effect here? */}
          <SearchBar
            desktopWidth={containerWidth}
            handleToggleMobileNav={handleToggleMobileNav}
          />
          <Outlet />
        </styles.Content>
      </styles.ContentWrapper>
    </styles.LayoutWrapper>
  );
};
