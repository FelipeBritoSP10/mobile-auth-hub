import React from 'react';
import { Link } from 'react-router-dom';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonItem, IonLabel, IonInput, IonButton, IonGrid, IonRow,
  IonCol, IonCard, IonCardContent, IonText, IonIcon
} from '@ionic/react';
import { eye, eyeOff, logoGoogle, logoApple, logoInstagram } from 'ionicons/icons';
import { Controller } from 'react-hook-form';
import { IMaskInput } from 'react-imask';
import { useSignupForm } from './signupLogic';
import './SignupPage.css';

const SignupPage: React.FC = () => {
  const { showPassword, setShowPassword, form, onSubmit, handleSocialRegister } = useSignupForm();
  const { control, handleSubmit, formState: { errors } } = form;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="signup-page-header">
          <IonTitle className="signup-page-title">Cadastro</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="signup-page-container">
        <IonGrid>
          <IonRow className="ion-justify-content-center ion-align-items-center" style={{ minHeight: '100vh' }}>
            <IonCol size="12" sizeSm="8" sizeMd="6" sizeLg="4">
              <IonCard className="signup-card">
                <IonCardContent>
                  <h1 className="signup-title">Crie sua conta</h1>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Nome Completo */}
                    <Controller
                      name="name"
                      control={control}
                      render={({ field }) => (
                        <div className="input-field-wrapper">
                          <IonItem lines="none" className={`input-container ${errors.name ? 'error' : ''}`}>
                            <IonLabel position="stacked" className="stacked-label">Nome Completo</IonLabel>
                            <IonInput
                              type="text"
                              placeholder="Digite seu nome completo"
                              {...field}
                              className="input-ionic"
                            />
                          </IonItem>
                          {errors.name && <IonText color="danger" className="error-text">{errors.name.message}</IonText>}
                        </div>
                      )}
                    />

                    {/* Email */}
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <div className="input-field-wrapper">
                          <IonItem lines="none" className={`input-container ${errors.email ? 'error' : ''}`}>
                            <IonLabel position="stacked" className="stacked-label">E-mail</IonLabel>
                            <IonInput
                              type="email"
                              placeholder="Digite seu e-mail"
                              {...field}
                              className="input-ionic"
                            />
                          </IonItem>
                          {errors.email && <IonText color="danger" className="error-text">{errors.email.message}</IonText>}
                        </div>
                      )}
                    />

                    {/* Senha */}
                    <Controller
                      name="password"
                      control={control}
                      render={({ field }) => (
                        <div className="input-field-wrapper">
                          <IonItem lines="none" className={`input-container ${errors.password ? 'error' : ''}`}>
                            <IonLabel position="stacked" className="stacked-label">Senha</IonLabel>
                            <IonInput
                              type={showPassword ? 'text' : 'password'}
                              placeholder="Digite sua senha"
                              {...field}
                              className="input-ionic"
                            >
                              <IonIcon icon={showPassword ? eyeOff : eye} onClick={() => setShowPassword(!showPassword)} slot="end" style={{ cursor: 'pointer', color: '#888' }} />
                            </IonInput>
                          </IonItem>
                          {errors.password && <IonText color="danger" className="error-text">{errors.password.message}</IonText>}
                        </div>
                      )}
                    />

                    {/* CPF */}
                    <Controller
                      name="cpf"
                      control={control}
                      render={({ field }) => (
                        <div className="input-field-wrapper">
                          <IonItem lines="none" className={`input-container ${errors.cpf ? 'error' : ''}`}>
                            <IonLabel position="stacked" className="stacked-label">CPF</IonLabel>
                            <IMaskInput
                              {...field}
                              mask="000.000.000-00"
                              onAccept={v => field.onChange(v)}
                              onBlur={field.onBlur}
                              placeholder="000.000.000-00"
                              className="input-standard"
                            />
                          </IonItem>
                          {errors.cpf && <IonText color="danger" className="error-text">{errors.cpf.message}</IonText>}
                        </div>
                      )}
                    />

                    <IonButton expand="block" type="submit" className="signup-button">
                      Cadastrar
                    </IonButton>
                  </form>

                  <p className="login-link-text">
                    Já tem conta? <Link to="/login" className="login-link">Faça login</Link>
                  </p>

                  <div className="social-text">ou continue com</div>

                  <IonGrid className="social-grid">
                    <IonRow className="ion-justify-content-center">
                      {[{ icon: logoGoogle, color: '#ea4335', name: 'google' },
                        { icon: logoApple, color: '#000', name: 'apple' },
                        { icon: logoInstagram, color: '#c13584', name: 'instagram' }].map((social, i) => (
                          <IonCol key={i} size="auto" style={{ padding: '0 0.4rem' }}>
                            <IonButton
                              fill="solid"
                              color="light"
                              onClick={() => handleSocialRegister(social.name)}
                              className="social-button"
                            >
                              <IonIcon icon={social.icon} style={{ fontSize: '22px', color: social.color }} />
                            </IonButton>
                          </IonCol>
                        ))}
                    </IonRow>
                  </IonGrid>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SignupPage;