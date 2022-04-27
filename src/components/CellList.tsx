import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector';
import CellListItem from './CellListItem';

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells = {} }) => {
    const { order = [], data = {} } = cells;
    return order.map(id => data[id])
  });

  const renderedCells = cells.map(cell => <CellListItem key={cell.id} cell={cell}></CellListItem>)
  return (
    <div>{renderedCells}</div>
  )
}

export default CellList;
