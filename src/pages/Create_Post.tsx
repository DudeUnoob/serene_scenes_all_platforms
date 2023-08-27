import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from "@ionic/react"




const CreatePost: React.FC = () => {
    return (
        <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Create Post</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">Create a post</IonContent>
    </IonPage>
    )
}

export default CreatePost