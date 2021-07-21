import router from 'next/router'
import { parseCookies } from 'nookies'
import { useContext } from 'react'
import { MainWrapper } from '../../src/components/MainWrapper'
import { ViewSelect } from '../../src/components/ViewSelect'

import { AuthContext } from '../../src/contexts/AuthContext'

export default function Dashboard() {
  const { user, signOut } = useContext(AuthContext)
  
  if(user){
    const type = user.isAdmin ? 'admin' : 'user'
    router.push(`/dashboard/${type}`)
  }

  return (
    <MainWrapper>
      <h2>Hello {user?.name}</h2>
    </MainWrapper>
  )
}

export const getServerSideProps = async (ctx) => {
  const {'psychometrika.token': token} = parseCookies(ctx)
  
  if(!token) {
    return{
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  return {
    props: {}
  }
}