import { ActionType } from "../action-types";
import { DeleteCellAction, Direction, InsertCellBeforeAction, MoveCellAction, UpdateCellAction } from '../actions';
import { CellTypes } from "../Cell";

export const moveCell = (id: string, direction: Direction): MoveCellAction => {
  return {
    type: ActionType.MOVE_CELL,
    payload: {
      id,
      direction,
    }
  }
};

export const insertCellBefore = (id: string, type: CellTypes): InsertCellBeforeAction => {
  return {
    type: ActionType.INSER_CELL_BEFORE,
    payload: {
      id,
      type,
    },
  }
 };

export const deleteCell = (id: string): DeleteCellAction => {
  return {
    type: ActionType.DELETE_CELL,
    payload: id,
  }
};

export const updateCell = (id: string, content: string): UpdateCellAction => {
  return {
    type: ActionType.UPDATE_CELL,
    payload: {
      id,
      content,
    },
  }
};
