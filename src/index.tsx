import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import CodeCell from './components/CodeCell';
import TextEditor from './components/TextEditor';
import { store } from './state';


const App = () => {
  return (
    <Provider store={store}>
    <div>
      {/* <CodeCell /> */}
      <TextEditor />
    </div>

    </Provider>

  );
};

ReactDOM.render(<App />, document.getElementById('root'));
