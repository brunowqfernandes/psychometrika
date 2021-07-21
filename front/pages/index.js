import { useForm } from 'react-hook-form'
import { useState, useContext } from 'react'
import { AuthContext } from '../src/contexts/AuthContext' 

import logo from '/public/images/logo.svg'
import showImg from '/public/images/show.svg'
import hideImg from '/public/images/hide.svg'

import { BoxLogin } from '../src/components/BoxLogin'
import { MainWrapper } from '../src/components/MainWrapper'

export default function Login() {
  const [show, setShow] = useState(false);  
  const [loginError, setLoginError] = useState(false);

  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext)  

  function handleShowHidePassword() {
    setShow(!show);
  }

  async function handleSignIn(data) {
    try{

      await signIn(data)

    } catch(err){
      
      setLoginError(true);

    }
  }

  return (
    <MainWrapper
      style={{backgroundImage: 'url("./images/bgLogin.png")'}}
    >
      <BoxLogin>
        <img src={logo} alt="Logo Psychometrika " />
        <h2>Desafio trainee</h2>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <label htmlFor="email">Email</label>
          <input 
            {...register('email')}
            id="email" 
            type="text" 
            placeholder="Seu email institucional"
            required
          />
          <label htmlFor="password">Senha</label>
          <div>
            <input 
              {...register('password')}
              id="password" 
              type={show ? 'text' : 'password'}
              placeholder="Mínimo de 8 caracteres"
              required
            />
            <i onClick={handleShowHidePassword}>
              <img src={show ? hideImg : showImg } alt="" />
            </i>
          </div>
          <button>Entrar</button>
        </form>
        {loginError  &&(
            <div className="messageLogin">
            <p>Usuário e/ou senha incorretos</p>
          </div>
        )}
      </BoxLogin>
    </MainWrapper>
  )
}