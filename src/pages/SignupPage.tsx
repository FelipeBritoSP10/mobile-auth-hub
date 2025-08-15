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
  IonIcon
} from '@ionic/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IMaskInput } from 'react-imask';
import { eye, eyeOff, logoGoogle, logoApple, logoInstagram } from 'ionicons/icons';

const signupSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres').required('Senha é obrigatória'),
  cpf: yup.string().length(14, 'CPF inválido').required('CPF é obrigatório'),
});

const SignupPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { control, handleSubmit, formState: { errors, touchedFields } } = useForm({
    resolver: yupResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      cpf: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = (data: any) => {
    console.log('Dados do cadastro:', data);
    alert(`Usuário ${data.name} cadastrado com sucesso!`);
  };

  const handleSocialRegister = (provider: string) => {
    console.log(`Cadastro com ${provider} clicado!`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar style={{ '--background': '#fff' }}>
          <IonTitle style={{ fontWeight: 'bold', color: '#444' }}>Cadastro</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen style={{ '--background': '#f4f5f8' }}>
        <IonGrid style={{ height: '100%' }}>
          <IonRow
            style={{ height: '100%' }}
            className="ion-justify-content-center ion-align-items-center"
          >
            <IonCol size="12" sizeSm="8" sizeMd="6" sizeLg="4" sizeXl="3">
              <IonCard
                style={{
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  maxWidth: '360px', // 🔹 Tela menor
                  margin: '0 auto'
                }}
              >
                <IonCardContent style={{ textAlign: 'center', padding: '0' }}>
                  <IonText color="primary">
                    <h1
                      style={{
                        fontWeight: '700',
                        fontSize: '2rem',
                        color: '#4b4b4b',
                        marginBottom: '1rem',
                        fontFamily: 'sans-serif'
                      }}
                    >
                      Crie sua conta
                    </h1>
                  </IonText>
                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: '#8c8c8c',
                      marginBottom: '1.5rem'
                    }}
                  >
                    Preencha os dados abaixo para se registrar.
                  </p>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Nome */}
                    <Controller
                      name="name"
                      control={control}
                      render={({ field }) => (
                        <IonItem
                          lines="none"
                          style={{
                            '--background': '#f8f8f8',
                            '--border-radius': '10px',
                            '--padding-start': '15px',
                            marginBottom: '1rem',
                            border: `1px solid ${errors.name && touchedFields.name
                              ? 'var(--ion-color-danger, #eb445a)'
                              : '#f8f8f8'}`
                          }}
                        >
                          <IonLabel
                            position="floating"
                            style={{
                              color: errors.name && touchedFields.name
                                ? 'var(--ion-color-danger, #eb445a)'
                                : '#999'
                            }}
                          >
                            Nome Completo
                          </IonLabel>
                          <IonInput {...field} type="text" style={{ '--padding-start': '0' }} />
                        </IonItem>
                      )}
                    />

                    {/* Email */}
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <IonItem
                          lines="none"
                          style={{
                            '--background': '#f8f8f8',
                            '--border-radius': '10px',
                            '--padding-start': '15px',
                            marginBottom: '1rem',
                            border: `1px solid ${errors.email && touchedFields.email
                              ? 'var(--ion-color-danger, #eb445a)'
                              : '#f8f8f8'}`
                          }}
                        >
                          <IonLabel
                            position="floating"
                            style={{
                              color: errors.email && touchedFields.email
                                ? 'var(--ion-color-danger, #eb445a)'
                                : '#999'
                            }}
                          >
                            Email
                          </IonLabel>
                          <IonInput {...field} type="email" style={{ '--padding-start': '0' }} />
                        </IonItem>
                      )}
                    />

                    {/* Senha */}
                    <Controller
                      name="password"
                      control={control}
                      render={({ field }) => (
                        <IonItem
                          lines="none"
                          style={{
                            '--background': '#f8f8f8',
                            '--border-radius': '10px',
                            '--padding-start': '15px',
                            marginBottom: '1rem',
                            border: `1px solid ${errors.password && touchedFields.password
                              ? 'var(--ion-color-danger, #eb445a)'
                              : '#f8f8f8'}`
                          }}
                        >
                          <IonLabel
                            position="floating"
                            style={{
                              color: errors.password && touchedFields.password
                                ? 'var(--ion-color-danger, #eb445a)'
                                : '#999'
                            }}
                          >
                            Senha
                          </IonLabel>
                          <IonInput
                            {...field}
                            type={showPassword ? 'text' : 'password'}
                            style={{ '--padding-start': '0' }}
                          />
                          <IonIcon
                            icon={showPassword ? eyeOff : eye}
                            onClick={() => setShowPassword(!showPassword)}
                            slot="end"
                            style={{
                              fontSize: '20px',
                              color: '#999',
                              cursor: 'pointer'
                            }}
                          />
                        </IonItem>
                      )}
                    />

                    {/* CPF */}
                    <Controller
                      name="cpf"
                      control={control}
                      render={({ field }) => (
                        <IonItem
                          lines="none"
                          style={{
                            '--background': '#f8f8f8',
                            '--border-radius': '10px',
                            '--padding-start': '15px',
                            marginBottom: '1rem',
                            border: `1px solid ${errors.cpf && touchedFields.cpf
                              ? 'var(--ion-color-danger, #eb445a)'
                              : '#f8f8f8'}`
                          }}
                        >
                          <IonLabel
                            position="floating"
                            style={{
                              color: errors.cpf && touchedFields.cpf
                                ? 'var(--ion-color-danger, #eb445a)'
                                : '#999'
                            }}
                          >
                            CPF
                          </IonLabel>
                          <IMaskInput
                            {...field}
                            mask="000.000.000-00"
                            onAccept={(value: any) => field.onChange(value)}
                            onBlur={field.onBlur}
                            placeholder="000.000.000-00"
                            type="text"
                            style={{
                              backgroundColor: 'transparent',
                              border: 'none',
                              outline: 'none',
                              width: '100%',
                              paddingTop: '15px',
                              fontFamily: 'inherit',
                              fontSize: 'inherit',
                              color: errors.cpf && touchedFields.cpf
                                ? 'var(--ion-color-danger, #eb445a)'
                                : 'var(--ion-color-step-850, #262626)'
                            }}
                          />
                          {errors.cpf && touchedFields.cpf && (
                            <IonText
                              color="danger"
                              style={{
                                display: 'block',
                                fontSize: '0.8rem',
                                marginTop: '0.2rem',
                                marginLeft: '1rem',
                                textAlign: 'left'
                              }}
                            >
                              {errors.cpf.message}
                            </IonText>
                          )}
                        </IonItem>
                      )}
                    />

                    <IonButton
                      expand="block"
                      type="submit"
                      style={{
                        height: '45px',
                        fontWeight: 'bold',
                        '--border-radius': '10px',
                        '--background': '#5c5cff',
                        '--background-activated': '#4a4ae0'
                      }}
                    >
                      Cadastrar
                    </IonButton>
                  </form>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      textAlign: 'center',
                      margin: '1.5rem 0',
                      color: '#ccc',
                      fontSize: '0.85rem'
                    }}
                  >
                    <span style={{ flex: 1, borderBottom: '1px solid #ccc' }}></span>
                    <span style={{ padding: '0 10px' }}>ou</span>
                    <span style={{ flex: 1, borderBottom: '1px solid #ccc' }}></span>
                  </div>

                  <IonGrid style={{ padding: '0', width: '100%' }}>
                    <IonRow className="ion-justify-content-center">
                      {[{ icon: logoGoogle, color: '#ea4335', name: 'google' },
                        { icon: logoApple, color: '#000', name: 'apple' },
                        { icon: logoInstagram, color: '#c13584', name: 'instagram' }].map((social, i) => (
                        <IonCol key={i} size="auto" style={{ padding: '0 0.4rem' }}>
                          <IonButton
                            fill="solid"
                            color="light"
                            onClick={() => handleSocialRegister(social.name)}
                            style={{
                              '--background': '#fff',
                              '--background-activated': '#f2f2f2',
                              '--border-radius': '10px',
                              '--box-shadow': '0 2px 5px rgba(0,0,0,0.1)',
                              width: '45px',
                              height: '45px'
                            }}
                          >
                            <IonIcon icon={social.icon} style={{ fontSize: '22px', color: social.color }} />
                          </IonButton>
                        </IonCol>
                      ))}
                    </IonRow>
                  </IonGrid>

                  <div style={{ paddingTop: '2rem' }}>
                    <IonText style={{ fontSize: '0.85rem', color: '#8c8c8c' }}>
                      Já tem uma conta?{' '}
                      <Link
                        to="/login"
                        style={{
                          fontWeight: 'bold',
                          textDecoration: 'none',
                          color: 'var(--ion-color-primary)'
                        }}
                      >
                        Faça o login aqui.
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

export default SignupPage;
