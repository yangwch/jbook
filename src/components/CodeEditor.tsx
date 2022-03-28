import React, { useRef } from 'react';
import MonacoEditor from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';
// import codeshift from 'jscodeshift';
// import Highlight from 'monaco-jsx-highlighter';
import './style.css';

interface CodeEditorProps {
  initialValue: string;
  onChange(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {
  const editorRef = useRef<any>();
  // const onEditorChange: OnChange = (value: string | undefined) => {
  //   if (value) {
  //     onChange(value);
  //   } else {
  //     onChange('');
  //   }
  // }

  const onEditorDidMount = (editor: any) => {
    editorRef.current = editor;
    editor.onDidChangeModelContent(() => {
      onChange(editor.getValue());
    })
  }

  const onFormatClick = () => {
    const editor = editorRef.current;
    if (editor) {
      // get current value
      const unformatted = editor.getModel().getValue();
      console.log(unformatted)
      // format value
  
      const formatted = prettier.format(unformatted, {
        parser: 'babel',
        plugins: [parser],
        useTabs: false,
        semi: true,
        singleQuote: true,
      }).replace(/\n$/, '');
      // set the formatted value back in the editor
      editor.setValue(formatted);
    }

  }

  return (
    <div className='editor-wrapper'>
      <button className='button button-format is-primary is-small' onClick={onFormatClick}>Format</button>
      <MonacoEditor
        defaultValue={initialValue}
        // onChange={onEditorChange}
        onMount={onEditorDidMount}
        defaultLanguage='javascript'
        theme='vs-dark'
        height='100%'
        width='100%'
        options={{
          wordWrap: 'on',
          minimap: { enabled: false },
          showUnused: false,
          lineNumbersMinChars: 3,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          folding: true,
          fontSize: 18,
          tabSize: 2,
        }}
      />
    </div>
  );
};

export default CodeEditor;
