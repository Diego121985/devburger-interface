import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import { api } from '../../services/api'
import { toast } from 'react-toastify';


import { useUser } from '../../hooks/UserContext';

import Logo from '../../assets/foto.png'
import { Container, Link, Form, InputContainer, LeftContainer, RightContainer, Title } from "./styles";



import { Button } from '../../components/Button';




export function Login() {

  const navigate = useNavigate();

  const {putUserData} = useUser();

  const schema = yup
    .object({
      email: yup.string().email().required(),
      password: yup.string().min(6).required(),
    })
    .required();



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  const onSubmit = async (data) => {

    const {data: userData} = await toast.promise(
      api.post('/session', {
        email: data.email,
        password: data.password,
      }),
      {

        pending: 'Verificando seus dados',
        success: {
          render() {
            setTimeout(() => {
              if (userData?.admin) {
                 navigate('/admin/pedido')
              } else {
                    navigate('/')
              }
          
             
            }, 2000);
            return 'Seja Bem-vindo 👌';
          },
        },

        error: 'Email ou Senha Incorretos 🤯'
      },

    );


    putUserData(userData)
   
  }

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt='logo-devburger' />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span> <br />Acesse com seu <span> Login e senha</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type='email'{...register("email")} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type='password'{...register("password")} />
            <p>{errors?.password?.message}</p>
          </InputContainer>
          <Button type="submit" >Entrar</Button>
        </Form>
        <p>Não possui conta? <Link to="/cadastro">Clique aqui.</Link></p>
      </RightContainer>
    </Container>
  );
}