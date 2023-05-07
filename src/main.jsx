import ReactDom from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// ReactDom.createRoot(document.getElementById('root'))
// .render(<App />);

ReactDom.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));