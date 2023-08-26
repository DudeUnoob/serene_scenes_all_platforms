

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"


const Tab1: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tab1</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding"></IonContent>
        </IonPage>
    )
}

export default Tab1;