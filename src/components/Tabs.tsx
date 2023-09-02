import { IonContent, IonHeader, IonTabs, IonPage, IonIcon, IonRouterOutlet, IonTitle, IonToolbar, IonTabBar, IonTabButton, IonLabel } from "@ionic/react"
import Tab1 from "../pages/Tab1";
import { Redirect, Route } from "react-router-dom"
import Tab2 from "../pages/Tab2";
import { playCircle, radio, library, search, addOutline, homeOutline, searchCircle, searchCircleOutline, searchCircleSharp, searchOutline, compass } from 'ionicons/icons';
import CreatePost from "../pages/Create_Post";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Login from "../pages/Login";
import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";


const Tabs: React.FC = () => {

    const { userData, token } =  useUser()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(userData) {
            console.log(userData)
            setLoading(false)
        }
    }, [loading, userData])

    // if(loading) {
    //     return (
    //         <div>Loading...</div>
    //     )
    // }

    
    if (userData !== null) {
        return (
            <IonTabs>
           <IonTabBar slot="bottom">
                <IonTabButton tab="Home" href="/app/home">
                    <IonIcon icon={homeOutline} />
                    <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab="create" href="/app/create">
                    <IonIcon icon={addOutline} />
                    <IonLabel>Create</IonLabel>
                </IonTabButton>
                <IonTabButton tab="search" href="/app/search">
                    <IonIcon icon={searchOutline} />
                    <IonLabel>Search</IonLabel>
                </IonTabButton>
           </IonTabBar>

           <IonRouterOutlet>
                <Route path="/app/home" component={Login} />
                <Route path={"/app/create"} component={CreatePost}/>
                <Route exact path="/app">
                    <Redirect to={"/app/home"}/>
                </Route>
                <Route path={"/app/search"} component={Search}/>

            </IonRouterOutlet>
        </IonTabs>
        )
    } else {
        return (
            <IonTabs>
            <IonTabBar slot="bottom">
                 <IonTabButton tab="Home" href="/app/home">
                     <IonIcon icon={homeOutline} />
                     <IonLabel>Home</IonLabel>
                 </IonTabButton>
                 {/* <IonTabButton tab="create" href="/app/create">
                     <IonIcon icon={addOutline} />
                     <IonLabel>Create</IonLabel>
                 </IonTabButton>
                 <IonTabButton tab="search" href="/app/search">
                     <IonIcon icon={searchOutline} />
                     <IonLabel>Search</IonLabel>
                 </IonTabButton> */}
            </IonTabBar>
 
            <IonRouterOutlet>
                 <Route path="/app/home" component={Login} />
                 {/* <Route path={"/app/create"} component={CreatePost}/> */}
                 <Route exact path="/app">
                     <Redirect to={"/app/home"}/>
                 </Route>
                 {/* <Route path={"/app/search"} component={Search}/> */}
 
             </IonRouterOutlet>
         </IonTabs>
        )
    }

  
}

export default Tabs;