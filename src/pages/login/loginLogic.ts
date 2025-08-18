import * as yup from 'yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
});

export const useLoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: { email: '', password: '' },
    mode: 'onBlur',
  });

  const onSubmit = (data: any) => {
    console.log('Login:', data);
    alert(`Bem-vindo de volta!`);
  };

  return { showPassword, setShowPassword, form, onSubmit };
};
