import React, { useCallback, useState, useRef, useEffect } from "react";
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

  const handleCloseMobileNav = useCallback(() => {
    setIsMobileNavOpen(false);
  }, []);

  const containerRef = useRef(null);
  const { width: containerWidth } = useElementDimensions(containerRef);

  useEffect(() => {
    const handleWindowResize = () => {
      window.innerWidth > 767 && handleCloseMobileNav();
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleCloseMobileNav]);

  return (
    <styles.LayoutWrapper>
      <SideNav />
      <MobileNav
        isOpen={isMobileNavOpen}
        handleCloseMobileNav={handleCloseMobileNav}
      />
      <styles.ContentWrapper>
        <styles.Content ref={containerRef}>
          {/* some sort of blur content on scroll effect here? */}
          <SearchBar
            desktopWidth={containerWidth}
            isMobileNavOpen={isMobileNavOpen}
            handleToggleMobileNav={handleToggleMobileNav}
          />
          <Outlet />
        </styles.Content>
      </styles.ContentWrapper>
    </styles.LayoutWrapper>
  );
};
