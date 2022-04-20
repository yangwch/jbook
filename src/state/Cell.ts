
export type CellTypes  = 'code' | 'text' | 'markdown'

export interface Cell {
  id: string;
  type: CellTypes;
  content: string;
}
