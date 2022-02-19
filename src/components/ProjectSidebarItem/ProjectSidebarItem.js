import React, { forwardRef } from "react";
import classnames from "classnames";
import { NavLink } from "react-router-dom";
import { string, number, shape } from "prop-types";

import * as ROUTES from "../../constants/routes";
import AriaText from "../AriaText/AriaText";

const ProjectSidebarItem = forwardRef(
  (
    {
      projectTodosCount = 0,
      project: {
        name = "Project",
        color: { colorValue = "#2a2f36" } = {},
      } = {},
    },
    ref,
  ) => {
    const sidebarItemClasses = classnames({
      Sidebar__Section__Item: true,
    });

    return (
      <>
        <li ref={ref} className={sidebarItemClasses}>
          <NavLink
            to={`${ROUTES.PROJECT}${name.toLowerCase()}`}
            activeClassName="Sidebar__Link--Active"
            className="Sidebar__Link"
          >
            <svg
              className="Sidebar__Section__Item__Color__Icon"
              fill={colorValue}
            >
              <use xlinkHref="#color" />
            </svg>
            <AriaText>project </AriaText>
            {name}
            <AriaText>with </AriaText>
            <span className="Sidebar__Section__Item__Count">
              {projectTodosCount}
            </span>
            <AriaText> todos.</AriaText>
          </NavLink>
        </li>
      </>
    );
  },
);

ProjectSidebarItem.propTypes = {
  projectTodosCount: number.isRequired,
  project: shape({
    name: string.isRequired,
    color: shape({ colorValue: string.isRequired }).isRequired,
  }).isRequired,
};

export default ProjectSidebarItem;
