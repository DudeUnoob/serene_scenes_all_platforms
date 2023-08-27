import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter } from "@ionic/react"
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
import { createOutline, logInOutline, logoGoogle, personCircleOutline } from "ionicons/icons"
import { useEffect } from "react"
import { UserContext, useUser, useUserUpdate } from "../context/UserContext"
import { validateAuth } from "../functions/validateAuth"



const Login: React.FC = () => {
    const { userData, token } = useUser()
    const provider = new GoogleAuthProvider()
    const updateUser = useUserUpdate()?.googleLogin
    const updateUserLogout = useUserUpdate()?.googleLogout

    const navigation = useIonRouter()

    const doLogin = () => {
        navigation.push('/app', 'forward', 'replace')
    }

    useEffect(() => {
        if (token != null){

        }
    }, [userData, token])

    const loginWithGoogle = async() => {
        
        updateUser()
    }

    const logoutWithGoogle = async() => {
        updateUserLogout()
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
                        <form >
                            <IonInput label="Email" type="email" fill="outline" labelPlacement="floating" placeholder="Enter your email..."></IonInput>
                            <IonInput className="ion-margin-top" label="Password" type="password" fill="outline" labelPlacement="floating" placeholder="Enter your password..."></IonInput>
                            
                            <IonButton type="submit" expand="block" className="ion-margin-top">
                                Login
                                <IonIcon icon={logInOutline} slot="end"/>
                            </IonButton>
                            <IonButton type="submit" expand="block" className="ion-margin-top" color={"tertiary"}>
                                Create Account
                                <IonIcon icon={personCircleOutline} slot="end"/>
                            </IonButton>
                            <IonButton type="button" expand="block" className="ion-margin-top" color={"danger"} onClick={loginWithGoogle}>
                                Login with Google
                                <IonIcon icon={logoGoogle} slot="end"/>
                            </IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>

            </IonContent>
        </IonPage>
    )
}

export default Login;