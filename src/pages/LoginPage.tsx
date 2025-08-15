import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonText,
  IonIcon,
} from "@ionic/react";
import {
  eye,
  eyeOff,
  logoGoogle,
  logoApple,
  logoInstagram,
} from "ionicons/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log("Login Clicado!");
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login com ${provider} clicado!`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar style={{ "--background": "#fff" }}>
          <IonTitle style={{ fontWeight: "bold", color: "#444" }}>
            Entrar
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen style={{ "--background": "#f4f5f8" }}>
        <IonGrid style={{ height: "100%" }}>
          <IonRow
            style={{ height: "100%" }}
            className="ion-justify-content-center ion-align-items-center"
          >
            <IonCol size="12" sizeMd="6" sizeLg="4">
              <IonCard
                style={{
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                  borderRadius: "16px",
                  padding: "2rem",
                }}
              >
                <IonCardContent style={{ textAlign: "center", padding: "0" }}>
                  <IonText color="primary">
                    <h1
                      style={{
                        fontWeight: "700",
                        fontSize: "2.5rem",
                        color: "#4b4b4b",
                        marginBottom: "1rem",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Bem-vindo!
                    </h1>
                  </IonText>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "#8c8c8c",
                      marginBottom: "2rem",
                    }}
                  >
                    Faça o seu login para continuar.
                  </p>

                  <form>
                    <IonItem
                      style={{
                        "--background": "#f8f8f8",
                        "--border-radius": "10px",
                        "--padding-start": "15px",
                        marginBottom: "1.2rem",
                      }}
                    >
                      <IonLabel position="floating" style={{ color: "#999" }}>
                        Email
                      </IonLabel>
                      <IonInput
                        type="email"
                        style={{ "--padding-start": "0" }}
                      ></IonInput>
                    </IonItem>

                    <IonItem
                      style={{
                        "--background": "#f8f8f8",
                        "--border-radius": "10px",
                        "--padding-start": "15px",
                        marginBottom: "1.2rem",
                      }}
                    >
                      <IonLabel position="floating" style={{ color: "#999" }}>
                        Senha
                      </IonLabel>
                      <IonInput
                        type={showPassword ? "text" : "password"}
                        style={{ "--padding-start": "0" }}
                      ></IonInput>
                      <IonIcon
                        icon={showPassword ? eyeOff : eye}
                        onClick={() => setShowPassword(!showPassword)}
                        slot="end"
                        style={{
                          fontSize: "20px",
                          color: "#999",
                          cursor: "pointer",
                          marginTop: "30px",
                        }}
                      />
                    </IonItem>

                    <IonButton
                      expand="block"
                      onClick={handleLogin}
                      style={{
                        height: "50px",
                        fontWeight: "bold",
                        "--border-radius": "10px",
                        "--background": "#5c5cff",
                        "--background-activated": "#4a4ae0",
                      }}
                    >
                      Entrar
                    </IonButton>
                  </form>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                      margin: "2rem 0",
                      color: "#ccc",
                      fontSize: "0.9rem",
                    }}
                  >
                    <span
                      style={{ flex: 1, borderBottom: "1px solid #ccc" }}
                    ></span>
                    <span style={{ padding: "0 10px" }}>ou</span>
                    <span
                      style={{ flex: 1, borderBottom: "1px solid #ccc" }}
                    ></span>
                  </div>

                  <IonGrid style={{ padding: "0", width: "100%" }}>
                    <IonRow className="ion-justify-content-center">
                      <IonCol size="auto" style={{ padding: "0 0.5rem" }}>
                        <IonButton
                          fill="solid"
                          color="light"
                          onClick={() => handleSocialLogin("google")}
                          style={{
                            "--background": "#fff",
                            "--background-activated": "#f2f2f2",
                            "--border-radius": "10px",
                            "--box-shadow": "0 2px 5px rgba(0,0,0,0.1)",
                            width: "50px",
                            height: "50px",
                          }}
                        >
                          <IonIcon
                            icon={logoGoogle}
                            style={{ fontSize: "25px", color: "#ea4335" }}
                          ></IonIcon>
                        </IonButton>
                      </IonCol>
                      <IonCol size="auto" style={{ padding: "0 0.5rem" }}>
                        <IonButton
                          fill="solid"
                          color="light"
                          onClick={() => handleSocialLogin("apple")}
                          style={{
                            "--background": "#fff",
                            "--background-activated": "#f2f2f2",
                            "--border-radius": "10px",
                            "--box-shadow": "0 2px 5px rgba(0,0,0,0.1)",
                            width: "50px",
                            height: "50px",
                          }}
                        >
                          <IonIcon
                            icon={logoApple}
                            style={{ fontSize: "25px", color: "#000" }}
                          ></IonIcon>
                        </IonButton>
                      </IonCol>
                      <IonCol size="auto" style={{ padding: "0 0.5rem" }}>
                        <IonButton
                          fill="solid"
                          color="light"
                          onClick={() => handleSocialLogin("instagram")}
                          style={{
                            "--background": "#fff",
                            "--background-activated": "#f2f2f2",
                            "--border-radius": "10px",
                            "--box-shadow": "0 2px 5px rgba(0,0,0,0.1)",
                            width: "50px",
                            height: "50px",
                          }}
                        >
                          <IonIcon
                            icon={logoInstagram}
                            style={{ fontSize: "25px", color: "#c13584" }}
                          ></IonIcon>
                        </IonButton>
                      </IonCol>
                    </IonRow>
                  </IonGrid>

                  <div style={{ paddingTop: "1.5rem" }}>
                    <IonText style={{ fontSize: "0.9rem", color: "#8c8c8c" }}>
                      Não tem uma conta?{" "}
                      <Link
                        to="/signup"
                        style={{
                          fontWeight: "bold",
                          textDecoration: "none",
                          color: "var(--ion-color-primary)",
                        }}
                      >
                        Cadastre-se aqui.
                      </Link>
                    </IonText>
                  </div>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
