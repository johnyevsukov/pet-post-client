/**
 * Logged in layout template.
 * Renders the desktop side navigation,
 * mobile navigation, and search bar.
 * Profile, Feed, and Settings pages
 * are rendered through this template via
 * react-router-dom Outlet.
 */

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
      /* desktop breakpoint */
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
