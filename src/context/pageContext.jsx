import React, { createContext, useEffect } from 'react';
import useImmerReducer from '../hooks/useImmerReducer';
import pageReducer, { TYPES } from './pageReducer';
import pageData from '../samples/default.json';

export const PageContext = createContext();

const initialPage = {
  id: '',
  theme: '',
  background: {},
  style: {},
  engine: '',
  header: {},
  footer: {},
  sections: [],
};


export default function PageProvider({ children }) {
  const [page, dispatch] = useImmerReducer(pageReducer, initialPage);
  const {
    UPDATE_PAGE,
    CHANGE_THEME,
    CHANGE_BG,
    CHANGE_STYLE,
    RESET_HEADER,
    RESET_FOOTER,
    RESET_SECTIONS,
  } = TYPES.PAGE;

  useEffect(() => {
    dispatch({ type: UPDATE_PAGE, payload: pageData.page });
  }, []);


  function updateStyle(style) {
    dispatch({ type: CHANGE_STYLE, payload: style });
  }

  function updateBackground(background) {
    dispatch({ type: CHANGE_BG, payload: background });
  }

  return (
    <PageContext.Provider
      value={{
        page,
        updateBackground,
        updateStyle,
      }}
    >
      {children}
    </PageContext.Provider>
  )
}
