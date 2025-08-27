import React from 'react';
import {
  IonPage, IonContent, IonGrid, IonRow, IonCol,
  IonCard, IonCardContent, IonInput, IonButton,
  IonIcon, IonText, useIonLoading, useIonToast
} from '@ionic/react';
import {
  mailOutline, lockClosedOutline, personOutline, callOutline
} from 'ionicons/icons';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Define o esquema de validação do formulário com mensagens em português.
const validationSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório.'),
  email: yup.string().email('E-mail inválido.').required('E-mail é obrigatório.'),
  phone: yup.string().required('Número de telefone é obrigatório.'),
  password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres.').required('Senha é obrigatória.'),
});

// Hook personalizado para a lógica do formulário.
const useSignupForm = () => {
  const [presentToast] = useIonToast();
  const [present, dismiss] = useIonLoading();

  const form = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: ''
    }
  });

  // Função para lidar com o envio do formulário.
  const onSubmit = async (data) => {
    await present({ message: 'Cadastrando...' });
    console.log('Dados de cadastro:', data);
    // Simula uma chamada de API com um pequeno atraso.
    setTimeout(async () => {
      await dismiss();
      presentToast({ message: 'Cadastro bem-sucedido!', color: 'success', duration: 2000 });
      // Lógica de navegação ou redirecionamento para outra página.
    }, 1500);
  };

  return { form, onSubmit };
};

// Componente principal da página de cadastro.
const SignupPage: React.FC = () => {
  const { form, onSubmit } = useSignupForm();
  const { control, handleSubmit, formState: { errors } } = form;

  return (
    <IonPage className="signup-page">
      {/* CSS puro para um design final com alinhamento, tipografia e animações refinadas */}
      <style>
        {`
        :root {
          --ion-color-primary: #10b981;
          --ion-color-danger: #eb445a;
        }

        /* Keyframes para animações suaves de entrada */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .signup-page {
          background: linear-gradient(135deg, #0a0a0a, #1a1a1a);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          animation: fadeIn 1s ease-in-out;
        }

        ion-content {
          --background: transparent;
        }
        
        /* Ajuste para alinhar ao topo e remover padding */
        .center-content {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: flex-start; /* Alinhamento ao topo */
          padding: 0; /* Remove todo o padding */
          text-align: left; /* Alinha o conteúdo à esquerda */
        }
        
        ion-card {
          background: rgba(30, 30, 30, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 0; /* Remove o border-radius para ir de ponta a ponta */
          border: none; /* Remove a borda */
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
          width: 100%;
          max-width: 100%; /* Ocupa a largura total */
          animation: slideInUp 0.8s ease-out forwards;
        }

        /* Ajuste do padding para remover espaços laterais */
        ion-card-content {
          padding: 36px 36px;
        }

        @media (max-width: 576px) {
            ion-card-content {
                padding: 24px 24px;
            }
        }
        
        .signup-header {
          margin-bottom: 32px;
          text-align: left; /* Alinha o cabeçalho à esquerda */
        }
        
        .signup-title {
          color: #fff;
          font-size: 2.8rem;
          font-weight: 800;
          margin: 0 0 8px 0;
          letter-spacing: -1.2px;
        }

        .signup-subtitle {
          color: #a0aec0;
          font-size: 1rem;
          margin: 0;
          line-height: 1.4;
          letter-spacing: 0.2px;
        }

        .signup-form {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .input-group {
          position: relative;
          width: 100%;
        }

        .custom-input {
          --background: transparent;
          --color: #fff;
          --placeholder-color: #718096;
          --padding-start: 0;
          --padding-end: 0;
          --padding-top: 16px;
          --padding-bottom: 16px;
          border: none;
          border-bottom: 2px solid #2d3748;
          transition: border-bottom-color 0.3s ease-in-out;
          font-size: 1rem;
        }

        .custom-input.input-has-focus,
        .custom-input:hover {
          border-bottom-color: #10b981;
          --color: #fff;
        }

        .custom-input.input-error {
          border-bottom-color: var(--ion-color-danger);
          animation: none;
        }

        .input-icon {
          color: #718096;
          font-size: 1.5rem;
          margin-right: 12px;
          transition: color 0.3s ease-in-out;
        }

        .custom-input.input-has-focus .input-icon,
        .custom-input:hover .input-icon {
          color: #10b981;
        }

        .error-text {
          font-size: 0.8rem;
          margin-top: 8px;
          display: block;
          color: var(--ion-color-danger);
          padding-left: 1.5rem;
        }
        
        .green-button {
          --background: linear-gradient(135deg, #10b981, #059669);
          --background-activated: linear-gradient(135deg, #059669, #059669);
          --border-radius: 12px;
          --box-shadow: 0 6px 16px rgba(16, 185, 129, 0.3);
          text-transform: uppercase;
          font-weight: 700;
          height: 56px;
          margin-top: 8px; /* Reduz a distância do botão */
          letter-spacing: 1.5px;
          transition: all 0.3s ease;
        }
        
        .green-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(16, 185, 129, 0.4);
        }

        .login-link-text {
          color: #cbd5e0;
          margin-top: 24px;
          text-align: center; /* Centraliza o link */
          width: 100%;
          font-size: 1.1rem;
        }

        .login-link {
          color: #fff;
          font-weight: bold;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.2s ease-in-out;
        }

        .login-link:hover {
          color: #10b981;
        }
        `}
      </style>
      <IonContent fullscreen>
        <IonGrid className="center-content">
          <IonRow className="ion-justify-content-center w-full">
            <IonCol size="12">
              <IonCard>
                <IonCardContent>
                  <div className="signup-header">
                    <h1 className="signup-title">Criar Conta</h1>
                    <p className="signup-subtitle">Sua jornada começa aqui. Preencha os campos para iniciar.</p>
                  </div>
                  
                  <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
                    {/* Nome Completo */}
                    <Controller
                      name="name"
                      control={control}
                      render={({ field }) => (
                        <div className="input-group">
                          <IonInput
                            className={`custom-input ${errors.name ? 'input-error' : ''}`}
                            name="name"
                            type="text"
                            placeholder="Nome Completo"
                            onIonChange={field.onChange}
                            onBlur={field.onBlur}
                            value={field.value}
                          >
                            <IonIcon slot="start" icon={personOutline} className="input-icon" />
                          </IonInput>
                          {errors.name && <IonText color="danger" className="error-text">{errors.name.message}</IonText>}
                        </div>
                      )}
                    />
                    
                    {/* Email */}
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <div className="input-group">
                          <IonInput
                            className={`custom-input ${errors.email ? 'input-error' : ''}`}
                            name="email"
                            type="email"
                            placeholder="Endereço de E-mail"
                            onIonChange={field.onChange}
                            onBlur={field.onBlur}
                            value={field.value}
                          >
                            <IonIcon slot="start" icon={mailOutline} className="input-icon" />
                          </IonInput>
                          {errors.email && <IonText color="danger" className="error-text">{errors.email.message}</IonText>}
                        </div>
                      )}
                    />

                    {/* Telefone */}
                    <Controller
                      name="phone"
                      control={control}
                      render={({ field }) => (
                        <div className="input-group">
                          <IonInput
                            className={`custom-input ${errors.phone ? 'input-error' : ''}`}
                            name="phone"
                            type="tel"
                            placeholder="Número de Telefone"
                            onIonChange={field.onChange}
                            onBlur={field.onBlur}
                            value={field.value}
                          >
                            <IonIcon slot="start" icon={callOutline} className="input-icon" />
                          </IonInput>
                          {errors.phone && <IonText color="danger" className="error-text">{errors.phone.message}</IonText>}
                        </div>
                      )}
                    />

                    {/* Senha */}
                    <Controller
                      name="password"
                      control={control}
                      render={({ field }) => (
                        <div className="input-group">
                          <IonInput
                            className={`custom-input ${errors.password ? 'input-error' : ''}`}
                            name="password"
                            type="password"
                            placeholder="Senha"
                            onIonChange={field.onChange}
                            onBlur={field.onBlur}
                            value={field.value}
                          >
                            <IonIcon slot="start" icon={lockClosedOutline} className="input-icon" />
                          </IonInput>
                          {errors.password && <IonText color="danger" className="error-text">{errors.password.message}</IonText>}
                        </div>
                      )}
                    />
                    
                    <IonButton expand="block" type="submit" className="green-button">
                      Cadastrar
                    </IonButton>
                  </form>
                  
                  <p className="login-link-text">
                    Já tem uma conta? <a href="#" className="login-link">Entrar</a>
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

export default SignupPage;
