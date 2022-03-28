import React, { useEffect, useRef } from 'react';
import './preview.css';

interface PreviewProps {
  code: string;
  err: string;
}

const html = `
    <html>
      <head>
        <style>
          html {
            background-color: #fff;
          }
        </style>
      </head>
      <body>
        <div id="root"></div>
        <script>
          const handleError = err => {
            const root = document.querySelector('#root');
            root.innerHTML = '<div style="color: red"><h4>Runtime error </h4>' + err + '</div>';
            console.error(err);
          };

          window.addEventListener('error', function(event) {
            handleError(event.error);
          });
          window.addEventListener('message', function (event) {
            try {
              eval(event.data);
            } catch(err) {
              handleError(err);
            }
          }, false);
        </script>
      </body>
    </html>
  `;

const Preview: React.FC<PreviewProps> = ({ code, err }) => {
  const iframe = useRef<HTMLIFrameElement | null>(null);
  useEffect(() => {
    if (iframe.current) {
      iframe.current.srcdoc = html;
      setTimeout(() => {
        iframe.current?.contentWindow?.postMessage(code, '*');
      }, 50);
    }
  }, [code]);
  console.log(err);
  
  return (
    <div className='iframe-wrapper'>
      <iframe
        sandbox='allow-scripts'
        ref={iframe}
        title='code preview'
        srcDoc={html}
      ></iframe>
      {
        err && <div className='preview-error'>{err}</div>
      }
    </div>
  );
};

export default Preview;
