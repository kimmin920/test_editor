import React, { useReducer } from "react";

export default function useGrid(data) {
  const [state, dispatch] = useReducer(reducer, data);
  const { areas, autoFill, autoFit, columnNum, columns, rows, blocks } = state;

  const gridStyle = {
    gridTemplateAreas: parseGridAreas(areas),
    gridTemplateColumns: parseGridItemSize(columns),
    gridTemplateRows: parseGridItemSize(rows),
  }

  return {
    blocks,
    gridStyle,
    areas,
    rows,
    columns,
    addRow: () => dispatch({ type: 'addRow' }),
    addColumn: () => dispatch({ type: 'addColumn' }),
    onChangeGridAreas: (newAreas) => dispatch({ type: 'changeAreas', payload: newAreas }),
    changeRows: (newRows) => dispatch({ type: 'changeRows', payload: newRows }),
    changeColumns: (newColumns) => dispatch({ type: 'changeColumns', payload: newColumns })
  };
}

function reducer(state, action) {
  switch (action.type) {
    case 'changeAreas':
      return {
        ...state,
        areas: action.payload,
      };
    case 'addColumn': {
      const newColumns = state.columns.concat({ value: 1, unit: 'fr' });
      const newAreas = state.areas.map(each => each + ' ' + '.');

      return {
        ...state,
        columns: newColumns,
        areas: newAreas,
      }
    }
    case 'addRow': {
      const newRows = state.rows.concat({ value: 1, unit: 'fr' });

      const newAreaOfColumnLength = '. '.repeat(state.columns.length);
      const newAreas = state.areas.concat(newAreaOfColumnLength);

      return {
        ...state,
        rows: newRows,
        areas: newAreas
      }
    }
    case 'changeColumns': {
      return {
        ...state,
        columns: action.payload,
      }
    }
    case 'changeRows': {
      return {
        ...state,
        rows: action.payload,
      }
    }
    default: 
      return state;
  }
}

function parseGridAreas(array) {
  return array.reduce((acc, cur) => acc + '"' + cur + '"', '');
}

function parseGridItemSize(array) {
  return array.reduce((acc, cur) => {
    let size;
  
    if (cur.unit === 'minmax') {
      size = `minmax(${cur.value})`;
    } else {
      size = cur.value + cur.unit;
    }

    return acc + size + ' ';
  }, '')
}