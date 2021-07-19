import { useContext } from 'react'
import { parseCookies } from 'nookies'

import { AuthContext } from '../../src/contexts/AuthContext'
import { getAPIClient } from '../../src/services/axios'

import logo from '/public/images/logo.svg'

import { Header } from '../../src/components/Header'
import { MainWrapper } from '../../src/components/MainWrapper'
import { SchoolName } from '../../src/components/SchoolName'
import { ViewSelect } from '../../src/components/ViewSelect'
import { Grade } from '../../src/components/Grade'

export default function UserDashboard({grade}) {
  const { user } = useContext(AuthContext)

  return (
    <>
      <Header>
        <div className="brand">
          <img src={logo} alt="Logo Psychometrika"/>
          <h2>Desafio trainee</h2>
        </div>        
        <ViewSelect viewType="user"/>
      </Header>
      <SchoolName>Nome da Escola</SchoolName>
      <MainWrapper>
        <Grade
          books={grade.books}
          viewType="user"
          title={grade.title}
        />
      </MainWrapper>
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx);
  const {'psychometrika.token': token} = parseCookies(ctx)
  
  if(!token) {
    return{
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const {data} = await apiClient.post('/auth/get_user');
  const grade = await apiClient.get(`/grades/${data.user.grade}`);
  return {
    props: grade.data
  }
}