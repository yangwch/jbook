import React from 'react'
import { useDispatch } from 'react-redux';
import { actionCreators, Cell, } from '../state';
import ActionBar from './ActionBar';
import CodeCell from './CodeCell';
import TextEditor from './TextEditor';

interface CellListItemProps {
  cell: Cell,
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  const dispatch = useDispatch();

  dispatch(actionCreators.updateCell)
  const { type } = cell;
  let child: JSX.Element;
  if (type === 'code') {
    child = <CodeCell cell={cell} />;
  } else {
    child = <TextEditor cell={cell} />;
  }
  return (
    <div>
      <ActionBar id={cell.id} />
      {child}
    </div>
  )
}

export default CellListItem;
