import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { playCircle, radio, library, search, addOutline, homeOutline } from 'ionicons/icons';

import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from "./pages/Login";
import CreatePost from './pages/Create_Post';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import NavigationBar from './components/NavigationBar';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>

    <IonReactRouter>
      <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/">
          <Home />
        </Route>
        
        <Route exact path={"/login"}>
          <Login />
        </Route>
        <Route exact path={"/create"}>
          <CreatePost />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab='home' href='/'>
          <IonLabel>Home</IonLabel>
          <IonIcon icon={homeOutline} />
        </IonTabButton>
        <IonTabButton tab='create' href='/create'>
          <IonLabel>New</IonLabel>
          <IonIcon icon={addOutline}/>
        </IonTabButton>
      </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
