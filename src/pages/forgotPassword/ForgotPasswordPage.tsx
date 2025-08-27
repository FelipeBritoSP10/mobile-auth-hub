import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonInput,
  IonLoading,
  IonAlert,
} from "@ionic/react";

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertHeader, setAlertHeader] = useState("");

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setAlertHeader("Atenção");
      setAlertMessage("Por favor, insira o seu e-mail!");
      setShowAlert(true);
      return;
    }

    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setAlertHeader("Sucesso!");
    setAlertMessage("Um link de recuperação foi enviado para o seu e-mail!");
    setShowAlert(true);

    setEmail("");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="login-page-header">
          <IonTitle className="login-page-title">Recuperação de senha</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding login-page-container">
        <IonGrid className="ion-justify-content-center ion-align-items-center full-height">
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeSm="8" sizeMd="6" sizeLg="4">
              <IonCard className="login-card">
                <IonCardContent>
                  <h1 className="login-title ion-no-margin">Recuperar senha</h1>
                  <br />
                  <form onSubmit={handleForgotPassword}>
                    <div className="input-field-wrapper">
                      <IonInput
                        type="email"
                        label="E-mail"
                        labelPlacement="floating"
                        fill="outline"
                        placeholder="Digite o seu e-mail"
                        value={email}
                        onIonInput={(e) => setEmail(e.detail.value!)}
                      />
                    </div>
                    <IonButton
                      expand="block"
                      type="submit"
                      className="login-button"
                      disabled={isLoading}
                    >
                      Enviar Link
                    </IonButton>
                  </form>
                  <p className="link-text ion-text-center">
                    <Link to="/login">Voltar para o login</Link>
                  </p>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonLoading isOpen={isLoading} message={"Enviando..."} />
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={alertHeader}
          message={alertMessage}
          buttons={["OK"]}
        />
      </IonContent>
    </IonPage>
  );
};

export default ForgotPasswordPage;