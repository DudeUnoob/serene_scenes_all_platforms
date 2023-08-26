import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import NavigationBar from '../components/NavigationBar';

const Home: React.FC = () => {
  return (
    <>
    <NavigationBar />
    <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">Home page Here</IonContent>
        </IonPage>
    </>
  );
};

export default Home;
