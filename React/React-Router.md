

### Install React-Router-DOM

**>_terminal**
` npm i react-router-dom `

### Import Router into App Component

**JavaScript React**

First, import the Router in **App.js**:
` import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; `

### Use Router in App Component

Next, use the imported ` Router ` Component to wrap the entire **App** as follows:

```JavaScript
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Home/>
      </div>
    </Router>
  );
}

export default App;
```

### Setup Main Route in App Component

Next, use the imported  ` Route `  and  ` Switch `  Components to setup **Routing** based on browser location path.

```javascript
import './App.css';
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
```

### Setup Additional Routes in App Component

Next, use the imported  ` Route `  and  ` Switch `  Components to setup additional **routes** based on browser location path.  Notice that since the  ` Header `  Component is used on all routes we can take it outside the **Route  ` Switch `  Component**.

```javascript
import './App.css';
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/checkout">
            <Checkout/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
```
