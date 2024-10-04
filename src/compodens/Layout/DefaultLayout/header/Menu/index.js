import React, { useState, useEffect, useRef } from "react";
import "./Menu-module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faFaceAngry,
  faTShirt,
  faKey,
  faRadiation,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "Lựa Chọn",
    children: {
      title: "Lựa Chọn",
      data: [
        {
          type: "Lựa Chọn",
          code: "en",
          title: "Trinh Thám",
          to: "/Friend",
        },
        {
          type: "Lựa Chọn",
          code: "vi",
          title: "Ngôn Tình",
          to: "/Friend",
        },
        {
          type: "Lựa Chọn",
          code: "vi",
          title: "Phiêu Lưu",
          to: "/Friend",
        },
        {
          type: "Lựa Chọn",
          code: "vi",
          title: "Ma",
          to: "/Friend",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Sách Bán Chạy",
    to: "/Friend",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Sách Cũ",
    to: "/Friend",
  },
  {
    icon: <FontAwesomeIcon icon={faFaceAngry} />,
    title: "Sách Sưu Tầm",
    to: "/Friend",
  },
  {
    icon: <FontAwesomeIcon icon={faTShirt} />,
    title: "Giỏ Hàng",
    to: "Cart",
  },
];

function Menu() {
  const [showOptions, setShowOptions] = useState(true);
  const [showLanguage, setShowLanguage] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
        setShowLanguage(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSettingsClick = () => {
    setShowMenu(!showMenu);
    setShowOptions(true);
    setShowLanguage(false);
  };

  const handleLanguageClick = () => {
    setShowOptions(false);
    setShowLanguage(true);
  };

  const handleLanguageSelect = (language) => {
    console.log("Ngôn ngữ đã chọn:", language.title);
    setShowLanguage(false);
    setShowOptions(true);
    setShowMenu(false);
  };

  return (
    <div className="qmenu-item-duc">
      <button className="qmenu-item-" onClick={handleSettingsClick}>
        <FontAwesomeIcon icon={faBars} className={"avatar"} />
      </button>
      {showMenu && (
        <div
          className="qmenu-container"
          ref={menuRef}
          style={{
            maxWidth: "170px",
            minHeight: "100px",
            maxHeight: "700px",
            background: "#fff",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          {showOptions && (
            <div className="qoptions-container">
              {MENU_ITEMS.map((menuItem, index) => {
                if (menuItem.children) {
                  return (
                    <div
                      key={index}
                      className="qmenu-item"
                      onClick={handleLanguageClick}
                    >
                      {menuItem.icon} {menuItem.title}
                    </div>
                  );
                }
                return (
                  <Link
                    to={menuItem.to}
                    key={index}
                    onClick={() => setShowMenu(false)}
                  >
                    <div className="qmenu-item">
                      {menuItem.icon} {menuItem.title}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
          {showLanguage && (
            <div className="qoptions-container">
              {MENU_ITEMS[0].children &&
                MENU_ITEMS[0].children.data.map((item) => (
                  <div
                    key={item.code}
                    className="qmenu-item"
                    onClick={() => handleLanguageSelect(item)}
                  >
                    {item.title}
                  </div>
                ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Menu;
