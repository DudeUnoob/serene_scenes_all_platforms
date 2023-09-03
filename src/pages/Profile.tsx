import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
import { createOutline, logInOutline, logoGoogle, personCircleOutline } from "ionicons/icons"
import { useEffect, useRef } from "react"
import { UserContext, useUser, useUserUpdate } from "../context/UserContext"
import { validateAuth } from "../functions/validateAuth"



const Profile: React.FC = () => {


    const { userData, token } = useUser()
    const provider = new GoogleAuthProvider()
    const updateUser = useUserUpdate()?.googleLogin
    const updateUserLogout = useUserUpdate()?.googleLogout


    const doLogin = () => {
      
    }


    // useEffect(() => {

    //     console.log(userData)
    // }, [token, userData])

    const loginWithGoogle = async() => {
        
        updateUser()
    }

    const logoutWithGoogle = async() => {
        updateUserLogout()
        console.log("yo")
    }
    return (
        <IonPage>
        <IonHeader>
            <IonToolbar color={"primary"}>
                <IonTitle>Login</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            <IonCard>
                <IonCardContent>
                    
                        
                        <IonButton type="submit" expand="block" className="ion-margin-top"  onClick={logoutWithGoogle}>
                            Logout
                            <IonIcon icon={logInOutline} slot="end"/>
                        </IonButton>
                        
                </IonCardContent>
            </IonCard>

        </IonContent>
    </IonPage>
    )
}

export default Profile