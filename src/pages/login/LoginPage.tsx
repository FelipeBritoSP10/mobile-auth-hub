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
  IonText,
  IonInput,
  IonIcon,
} from "@ionic/react";
import { eye, eyeOff } from "ionicons/icons";
import { Controller } from "react-hook-form";
import { useLoginForm } from "./loginLogic";
import "./LoginPage.css";

const LoginPage: React.FC = () => {
  const { form, onSubmit } = useLoginForm();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const [showPassword, setShowPassword] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="login-page-header">
          <IonTitle className="login-page-title">Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="login-page-container">
        <IonGrid>
          <IonRow
            className="ion-justify-content-center ion-align-items-center"
            style={{ minHeight: "100vh" }}
          >
            <IonCol size="12" sizeSm="8" sizeMd="6" sizeLg="4">
              <IonCard className="login-card">
                <IonCardContent>
                  <h1 className="login-title">Faça login</h1>
                  <br></br>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Campo de Email */}
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <div className="input-field-wrapper">
                          <IonInput
                            type="email"
                            label="E-mail"
                            labelPlacement="floating"
                            fill="outline"
                            placeholder="Digite seu e-mail"
                            value={field.value}
                            onIonInput={(e) => field.onChange(e.detail.value!)}
                            onIonBlur={field.onBlur}
                            className={errors.email ? "input-outline-error" : ""}
                          />
                          {errors.email && (
                            <IonText color="danger" className="error-text">
                              {errors.email.message}
                            </IonText>
                          )}
                        </div>
                      )}
                    />

                    {/* Campo de Senha com toggle */}
                    <Controller
                      name="password"
                      control={control}
                      render={({ field }) => (
                        <div className="input-field-wrapper password-wrapper">
                          <IonInput
                            type={showPassword ? "text" : "password"}
                            label="Senha"
                            labelPlacement="floating"
                            fill="outline"
                            placeholder="Digite sua senha"
                            value={field.value}
                            onIonInput={(e) => field.onChange(e.detail.value!)}
                            onIonBlur={field.onBlur}
                            className={errors.password ? "input-outline-error" : ""}
                          />
                          <IonIcon
                            icon={showPassword ? eyeOff : eye}
                            className="password-toggle-icon"
                            onClick={() => setShowPassword((prev) => !prev)}
                          />
                          {errors.password && (
                            <IonText color="danger" className="error-text">
                              {errors.password.message}
                            </IonText>
                          )}
                        </div>
                      )}
                    />
                   
                    <IonButton expand="block" type="submit" className="login-button">
                      Entrar
                    </IonButton>
                  </form>
                  <br></br>
                  <p className="register-link-text">
                    Não tem conta?{" "}
                    <Link to="/register" className="register-link">
                      Crie sua conta
                    </Link>
                  </p>
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
