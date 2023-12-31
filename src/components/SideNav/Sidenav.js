// In Sidenav.js
import { navData } from "../../lib/navData";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import styles from "./sidenav.module.css";
import { HOMEPAGE, EC_HOMEPAGE } from "../../consts/pagesNames";

export default function Sidenav(props) {
  const [open, setopen] = useState(false);

  const toggleOpen = () => {
    setopen(!open);
  };
  return (
    <div className={open ? styles.sidenav : styles.sidenavClosed}>
      <button className={styles.menuBtn} onClick={toggleOpen}>
        {open ? (
          <KeyboardDoubleArrowLeftIcon />
        ) : (
          <KeyboardDoubleArrowRightIcon />
        )}
      </button>

      {navData.map((item) => {
        return (
          <NavLink
            key={item.id}
            className={styles.sideitem}
            to={item.link}
            onClick={() => {
              if (item.text === HOMEPAGE) props.setHeaderTitle(EC_HOMEPAGE);
              else props.setHeaderTitle(item.text);
            }}
          >
            {item.icon}
            <span className={open ? styles.linkText : styles.linkTextClosed}>
              {item.text}
            </span>
          </NavLink>
        );
      })}
    </div>
  );
}
