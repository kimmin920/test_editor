import Default from "./Default";
import FlexColumn from "./FlexColumn";
import FlexRow from "./FlexRow";
import Grid from "./Grid";

const sections = new Map();

sections
  .set(undefined, Default)
  .set('FLEX_COLUMN', FlexColumn)
  .set('FLEX_ROW', FlexRow)
  .set('GRID', Grid);

export default sections;
