import React, { useEffect, useState } from "react";
import {
  TOTAL_SCREENS,
  GET_SCREEN_INDEX,
} from "../../../utilities/commonUtils";
import ScrollService from "../../../utilities/ScrollService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

function Header() {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;

    const screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;

    setSelectedScreen(screenIndex);
  };

  useEffect(() => {
    const subscription =
      ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen);

    return () => subscription.unsubscribe();
  }, []);

  const getHeaderOptionsClass = (index) => {
    let classes = "header-option";
    if (index < TOTAL_SCREENS.length - 1) classes += " header-option-separator";
    if (selectedScreen === index) classes += " selected-header-option";
    return classes;
  };

  const switchScreen = (index, screen) => {
    const screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: "smooth" });
    setSelectedScreen(index);
    setShowHeaderOptions(false);
  };

  const getHeaderOptions = () =>
    TOTAL_SCREENS.map((screen, i) => (
      <div
        key={screen.screen_name}
        className={getHeaderOptionsClass(i)}
        onClick={() => switchScreen(i, screen)}
      >
        <span>{screen.screen_name}</span>
      </div>
    ));

  return (
    <div className="header-container">
      <div
        className="header-hamburger"
        onClick={(e) => {
          e.stopPropagation();
          setShowHeaderOptions((prev) => !prev);
        }}
      >
        <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
      </div>

      <div className="header-logo">
        <span>LINA CHIOMA⧜</span>
      </div>

      <div
        className={
          showHeaderOptions
            ? "header-options show-hamburger-options"
            : "header-options"
        }
      >
        {getHeaderOptions()}
      </div>
    </div>
  );
}

export default Header;
