export const TYPES = {
  PAGE: {
    UPDATE_PAGE: 'UPDATE_PAGE',
    CHANGE_THEME: 'PAGE_CHANGE_THEME',
    CHANGE_BG: 'PAGE_CHANGE_BG',
    CHANGE_STYLE: 'PAGE_CHANGE_STYLE',
    RESET_HEADER: 'PAGE_RESET_HEADER',
    RESET_FOOTER: 'PAGE_RESET_FOOTER',
    RESET_SECTIONS: 'PAGE_RESET_SECTIONS'
  }
};

export default function pageReducer(draft, { type, payload }) {
  const {
    UPDATE_PAGE,
    CHANGE_THEME,
    CHANGE_BG,
    CHANGE_STYLE,
    RESET_HEADER,
    RESET_FOOTER,
    RESET_SECTIONS
  } = TYPES.PAGE;

  switch (type) {
    case CHANGE_BG:
      draft.background = payload;
      return;
    case CHANGE_STYLE:
      draft.styles = payload;
      return;
    case UPDATE_PAGE:
      return { ...payload };
    default:
      throw new Error();
  }
}