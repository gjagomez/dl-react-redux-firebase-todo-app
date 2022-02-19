import { INBOX_PROJECT_IDENTIFIER } from "../../constants/collections";

export const addTodoReducerState = {
  showProjects: false,
  initialSelectedProjectSet: false,
  showLabels: false,
  showDate: false,
  todo: {
    name: "",
    dueDate: null,
    completed: false,
    project: null,
    labels: null,
    hasNewTime: false,
    withTime: false,
  },
};

export const AddTodoTypes = {
  TOGGLE_SHOW_PROJECTS: "TOGGLE_SHOW_PROJECTS",
  SET_INITIAL_SELECTED_PROJECT: "SET_INITIAL_SELECTED_PROJECT",
  SET_SELECTED_PROJECT: "SET_SELECTED_PROJECT",
  TOGGLE_SHOW_LABELS: "TOGGLE_SHOW_LABELS",
  SET_SELECTED_LABEL: "SET_SELECTED_LABEL",
  TOGGLE_SHOW_DATE: "TOGGLE_SHOW_DATE",
  SET_SELECTED_DATE: "SET_SELECTED_DATE",
  SET_TODO_NAME: "SET_TODO_NAME",
  SET_HAS_NEW_TIME: "SET_HAS_NEW_TIME",
};

export const addTodoReducer = (state, { type, payload }) => {
  switch (type) {
    case AddTodoTypes.SET_TODO_NAME: {
      return {
        ...state,
        todo: {
          ...state.todo,
          name: payload,
        },
      };
    }
    case AddTodoTypes.SET_HAS_NEW_TIME: {
      return {
        ...state,
        todo: {
          ...state.todo,
          hasNewTime: payload,
          withTime: payload,
        },
      };
    }
    case AddTodoTypes.TOGGLE_SHOW_PROJECTS: {
      return {
        ...state,
        showProjects: !state.showProjects,
        showLabels: false,
        showDate: false,
      };
    }
    case AddTodoTypes.SET_INITIAL_SELECTED_PROJECT: {
      return {
        ...state,
        initialSelectedProjectSet: true,
        todo: {
          ...state.todo,
          project: {
            colorName: payload.color.colorName,
            colorValue: payload.color.colorValue,
            projectID: payload.id,
            [INBOX_PROJECT_IDENTIFIER]: payload[INBOX_PROJECT_IDENTIFIER]
              ? true
              : false,
            name: payload.name,
          },
        },
      };
    }
    case AddTodoTypes.SET_SELECTED_PROJECT: {
      return {
        ...state,
        showProjects: false,
        todo: {
          ...state.todo,
          project: {
            colorName: payload.color.colorName,
            colorValue: payload.color.colorValue,
            projectID: payload.id,
            name: payload.name,
            [INBOX_PROJECT_IDENTIFIER]: payload[INBOX_PROJECT_IDENTIFIER]
              ? true
              : false,
          },
        },
      };
    }
    case AddTodoTypes.TOGGLE_SHOW_LABELS: {
      return {
        ...state,
        showProjects: false,
        showLabels: !state.showLabels,
        showDate: false,
      };
    }
    case AddTodoTypes.SET_SELECTED_LABEL: {
      return {
        ...state,
        showLabels: false,
        todo: {
          ...state.todo,
          labels: [...payload],
        },
      };
    }
    case AddTodoTypes.TOGGLE_SHOW_DATE: {
      return {
        ...state,
        showProjects: false,
        showLabels: false,
        showDate: !state.showDate,
      };
    }
    case AddTodoTypes.SET_SELECTED_DATE: {
      return {
        ...state,
        showDate: false,
        todo: {
          ...state.todo,
          dueDate: payload,
        },
      };
    }
    default:
      return state;
  }
};

export const setTodoNameAction = (todoName) => ({
  type: AddTodoTypes.SET_TODO_NAME,
  payload: todoName,
});

export const toggleShowProjectsAction = () => ({
  type: AddTodoTypes.TOGGLE_SHOW_PROJECTS,
});

export const setInitialSelectedProjectAction = (project) => ({
  type: AddTodoTypes.SET_INITIAL_SELECTED_PROJECT,
  payload: project,
});

export const setSelectedProjectAction = (project) => ({
  type: AddTodoTypes.SET_SELECTED_PROJECT,
  payload: project,
});

export const toggleShowLabelsAction = () => ({
  type: AddTodoTypes.TOGGLE_SHOW_LABELS,
});

export const setSelectedLabelAction = (label) => ({
  type: AddTodoTypes.SET_SELECTED_LABEL,
  payload: label,
});

export const toggleShowDateAction = () => ({
  type: AddTodoTypes.TOGGLE_SHOW_DATE,
});

export const setSelectedDateAction = (date) => ({
  type: AddTodoTypes.SET_SELECTED_DATE,
  payload: date,
});

export const setHasNewTimeAction = (hasTime) => ({
  type: AddTodoTypes.SET_HAS_NEW_TIME,
  payload: hasTime,
});
