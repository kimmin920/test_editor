import React, { createContext, useReducer } from 'react'
import useImmerReducer from '../hooks/useImmerReducer';
import pageReducer from './pageReducer';

export const ProjectContext = createContext();

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


export default function PageProvider() {
  const [page, dispatch] = useImmerReducer(pageReducer, initialPage);

  return (
    <div>
      
    </div>
  )
}
