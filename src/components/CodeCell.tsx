import { useEffect, useState } from 'react';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import CodeEditor from '../components/CodeEditor';
import Preview from '../components/Preview';
import bundler from '../bundler';
import Resizable from './Resizable';

const defaultInput = `
import React from 'react';
import ReactDOM from 'react-dom';
const App = () => {
  return (
    <div>
      <h1>Hello world!</h1>
      <button onClick={() => console.log('click')}>Click me</button>
    </div>
  )
}
ReactDOM.render(<App/>, document.querySelector('#root'));
  `

const CodeCell = () => {
  const [code, setCode] = useState('');
  const [err, setErr] = useState('');
  const [input, setInput] = useState(defaultInput);

  useEffect(() => {
    const timer = setTimeout(async () => {
      const data = await bundler(input);
      setCode(data.code);
      setErr(data.err);
    }, 3000);
    return () => clearTimeout(timer);
  }, [input]);

  return (
    <Resizable direction='vertical'>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <Resizable direction='horizontal'>
          <CodeEditor initialValue={input} onChange={(v) => setInput(v)} />
        </Resizable>
        {/* <div>
          <button onClick={onClick}>Submit</button>
        </div> */}
        <Preview code={code} err={err} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
