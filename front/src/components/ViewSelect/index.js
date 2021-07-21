import router from 'next/router';
import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { StyledViewSelect } from './styles';

export function ViewSelect({viewType}){
  const [open, setOpen] = useState(false);
  const [accessType, setAccessType] = useState(viewType);
  const { user, signOut } = useContext(AuthContext)

  async function handleLogout() {
    signOut();
  }
  
  function handleViewChange(e){
    e.preventDefault();
    router.push(`/dashboard/${accessType}`)
  }
  return(
    <StyledViewSelect open={open}>
      <button onClick={() => setOpen(!open)}>
        <span>A</span>
      </button>
      <div>
        <form onSubmit={handleViewChange}>
          <p>Você está atualmente com:</p>
          {user?.isAdmin &&
            <label>
              <input
              type="radio" 
              value="admin"
              checked={accessType === "admin"}
              onChange={e => setAccessType(e.target.value)}
              />
              <span>Acesso do Admin</span>
            </label>
            }
          <label>
            <input 
              type="radio" 
              value="user"
              checked={accessType === "user"}
              onChange={e => setAccessType(e.target.value)}
            />
            <span>Acesso do Aluno</span>
          </label>
          {user?.isAdmin &&
            <button>Alterar</button>
          }
        </form>
        <button className="btn-sair" onClick={handleLogout}>Sair</button>
      </div>
    </StyledViewSelect>
  )
}