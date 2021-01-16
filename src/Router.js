import App from './App';
import {Switch,Route} from 'react-router-dom';

function AppRouter(){
    return (
        <Switch>
            <Route path='/' exact component={App} />
        </Switch>
    );
}

export default AppRouter;