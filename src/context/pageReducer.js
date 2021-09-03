export const TYPES = {
  PAGE: {
    CHANGE_THEME: 'PAGE_CHANGE_THEME',
    CHANGE_BG: 'PAGE_CHANGE_BG',
    CHANGE_STYLE: 'PAGE_CHANGE_STYLE',
    RESET_HEADER: 'PAGE_RESET_HEADER',
    RESET_FOOTER: 'PAGE_RESET_FOOTER',
    RESET_SECTIONS: 'PAGE_RESET_SECTIONS'
  }
};

export default function pageReducer(draft, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}