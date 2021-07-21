import { parseCookies } from 'nookies'
import { resetServerContext } from 'react-beautiful-dnd'
import { getAPIClient } from '../../src/services/axios'


import { Header } from '../../src/components/Header'
import { ViewSelect } from '../../src/components/ViewSelect'
import { SchoolName } from '../../src/components/SchoolName'
import { MainWrapper } from '../../src/components/MainWrapper'
import { DraggableGrade } from '../../src/components/DraggableGrade'

import logo from '/public/images/logo.svg'

export default function Admin({grades}) {
  resetServerContext()
  return (
    <>
      <Header>
        <div className="brand">
          <img src={logo} alt="Logo Psychometrika"/>
          <h2>Desafio trainee</h2>
        </div>
          <ViewSelect viewType="admin"/>
      </Header>
      <SchoolName>Nome da Escola</SchoolName>
      <MainWrapper>
          {grades.map(grade => {
            return(
              <DraggableGrade                  
                books={grade.books}
                title={grade.title}
                key={grade._id}
              />
            )
          })}
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

  const grades = await apiClient.get('/grades');
  return {
    props: grades.data
  }
}