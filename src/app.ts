import * as React from 'react';
setTimeout(() => {
    require('annar/dist/annar.min.css');
    require('./app.scss');
})

const App: React.FC = props => {
    return props.children as React.ReactElement;
};

export default App;
