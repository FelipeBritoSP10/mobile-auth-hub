import * as yup from 'yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export const signupSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: yup.string().min(6, 'Senha deve ter no mínimo 6 caracteres').required('Senha é obrigatória'),
  cpf: yup.string().length(14, 'CPF inválido').required('CPF é obrigatório'),
});

export const useSignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    resolver: yupResolver(signupSchema),
    defaultValues: { name: '', email: '', password: '', cpf: '' },
    mode: 'onBlur',
  });

  const onSubmit = (data: any) => {
    console.log('Cadastro:', data);
    alert(`Usuário ${data.name} cadastrado com sucesso!`);
  };

  const handleSocialRegister = (provider: string) => {
    console.log(`Cadastro com ${provider} clicado!`);
  };

  return { showPassword, setShowPassword, form, onSubmit, handleSocialRegister };
};
