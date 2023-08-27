
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from './ExploreContainer';

export default function NavigationBar() {
    return (
        <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bro what</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />

      </IonContent>
    </IonPage>
    )
}