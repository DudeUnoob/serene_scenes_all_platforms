import { IonContent, IonHeader, IonTabs, IonPage, IonIcon, IonRouterOutlet, IonTitle, IonToolbar, IonTabBar, IonTabButton, IonLabel } from "@ionic/react"
import Tab1 from "../pages/Tab1";
import { Redirect, Route } from "react-router-dom"
import Tab2 from "../pages/Tab2";
import { playCircle, radio, library, search, addOutline, homeOutline } from 'ionicons/icons';


const Tabs: React.FC = () => {
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Route path="/app/tab1" component={Tab1} />
                <Route path={"/app/tab2"} component={Tab2}/>
                <Route exact path="/app">
                    <Redirect to={"/app/tab1"}/>
                </Route>
            </IonRouterOutlet>

           <IonTabBar slot="bottom">
                <IonTabButton tab="tab1" href="/app/tab1">
                    <IonIcon icon={homeOutline}></IonIcon>
                    <IonLabel>Tab1</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href="/app/tab2">
                    <IonIcon icon={addOutline}></IonIcon>
                    <IonLabel>Tab2</IonLabel>
                </IonTabButton>
           </IonTabBar>
        </IonTabs>
    )
}

export default Tabs;