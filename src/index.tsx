import ReactDOM from 'react-dom';
// import CodeCell from './components/CodeCell';
import TextEditor from './components/TextEditor';

const App = () => {
  return (
    <div>
      {/* <CodeCell /> */}
      <TextEditor />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
