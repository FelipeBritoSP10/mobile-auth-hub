import React from 'react';
import { Link } from 'react-router-dom';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonItem, IonLabel, IonInput, IonButton, IonGrid, IonRow,
  IonCol, IonCard, IonCardContent, IonIcon
} from '@ionic/react';
import { eye, eyeOff } from 'ionicons/icons';
import { Controller } from 'react-hook-form';
import { useLoginForm } from './loginLogic';

const LoginPage: React.FC = () => {
  const { showPassword, setShowPassword, form, onSubmit } = useLoginForm();
  const { control, handleSubmit, formState: { errors, touchedFields } } = form;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar style={{ '--background': '#fff' }}>
          <IonTitle style={{ fontWeight: 'bold', color: '#444' }}>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen style={{ '--background': '#f4f5f8' }}>
        <IonGrid>
          <IonRow className="ion-justify-content-center ion-align-items-center">
            <IonCol size="12" sizeSm="8" sizeMd="6" sizeLg="4">
              <IonCard style={{ borderRadius: '16px', padding: '1.5rem', margin: '0 auto' }}>
                <IonCardContent>
                  <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Faça login</h1>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <IonItem lines="none" style={{ marginBottom: '1rem', border: `1px solid ${errors.email && touchedFields.email ? 'red' : '#f0f0f0'}` }}>
                          <IonLabel position="floating">E-mail</IonLabel>
                          <IonInput {...field} type="email" />
                        </IonItem>
                      )}
                    />
                    <Controller
                      name="password"
                      control={control}
                      render={({ field }) => (
                        <IonItem lines="none" style={{ marginBottom: '1rem', border: `1px solid ${errors.password && touchedFields.password ? 'red' : '#f0f0f0'}` }}>
                          <IonLabel position="floating">Senha</IonLabel>
                          <IonInput {...field} type={showPassword ? 'text' : 'password'} />
                          <IonIcon icon={showPassword ? eyeOff : eye} onClick={() => setShowPassword(!showPassword)} slot="end" />
                        </IonItem>
                      )}
                    />
                    <IonButton expand="block" type="submit">Entrar</IonButton>
                  </form>

                  <p style={{ textAlign: 'center', marginTop: '1rem' }}>
                    Não tem conta? <Link to="/register">Crie sua conta</Link>
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
