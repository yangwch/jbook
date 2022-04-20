import { ActionType } from "../action-types";
import { CellTypes } from "../Cell";

export type Direction = 'up' | 'down'

export interface MoveCellAction {
  type: ActionType.MOVE_CELL;
  payload: {
    id: string;
    direction: Direction;
  }
}

export interface DeleteCellAction {
  type: ActionType.DELETE_CELL;
  payload: string;
}

export interface InsertCellBeforeAction {
  type: ActionType.INSER_CELL_BEFORE;
  payload: {
    id: string;
    type: CellTypes;
  }
}

export interface UpdateCellAction {
  type: ActionType.UPDATE_CELL;
  payload: {
    id: string;
    content: string;
  }
}

export type Action =
  MoveCellAction |
  InsertCellBeforeAction |
  DeleteCellAction |
  UpdateCellAction
