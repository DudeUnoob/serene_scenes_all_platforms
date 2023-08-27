import { IonHeader, IonPage, IonContent, IonToolbar, IonTitle, IonSearchbar } from "@ionic/react"
import "../css/Search.css"

const Search: React.FC = () => {
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar className="search-header">
                    <IonTitle>Search</IonTitle>
                </IonToolbar>
                <IonToolbar>
                    <IonSearchbar></IonSearchbar>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">Search page Here</IonContent>
        </IonPage>
    )
}

export default Search