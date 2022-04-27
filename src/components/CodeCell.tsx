import { useEffect, useState } from 'react';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import CodeEditor from '../components/CodeEditor';
import Preview from '../components/Preview';
import bundler from '../bundler';
import Resizable from './Resizable';
import { Cell } from '../state';
import useActions from '../hooks/useActions';

interface CodeCellProps {
  cell: Cell,
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const [code, setCode] = useState('');
  const [err, setErr] = useState('');

  const { updateCell } = useActions();

  useEffect(() => {
    const timer = setTimeout(async () => {
      const data = await bundler(cell.content);
      setCode(data.code);
      setErr(data.err);
    }, 3000);
    return () => clearTimeout(timer);
  }, [cell.content]);

  return (
    <Resizable direction='vertical'>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <Resizable direction='horizontal'>
          <CodeEditor initialValue={cell.content} onChange={(v) => updateCell(cell.id, v)} />
        </Resizable>
        <Preview code={code} err={err} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
