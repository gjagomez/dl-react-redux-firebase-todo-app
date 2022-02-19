import React from "react";
import { string } from "prop-types";

import classNames from "classnames";

import "./MenuButton.styles.scss";
import { getClassesFromProps } from "../../utils/helpers";

function MenuButton({ additionalClasses, menu, toggleMenu, ...props }) {
  const addedClasses = getClassesFromProps(additionalClasses);
  const { menuOpen } = menu;

  const buttonClassNames = classNames({
    [`MenuButton--Medium `]: true,
    MenuButton: true,
    ...addedClasses,
  });

  const svgClassNames = classNames({
    MenuButton__Icon: true,
    [`MenuButton__Icon--Rotate`]: menuOpen,
  });

  return (
    <button
      className={buttonClassNames}
      aria-label={`${menuOpen ? `Close` : `Open`} the navigation sidebar.`}
      aria-haspopup="true"
      onClick={() => toggleMenu()}
      {...props}
    >
      <svg className={svgClassNames}>
        {menuOpen ? <use xlinkHref={`#close`} /> : <use xlinkHref={`#menu`} />}
      </svg>
    </button>
  );
}

MenuButton.propTypes = {
  additionalClasses: string,
};

MenuButton.defaultProps = {
  additionalClasses: null,
};

export default MenuButton;
