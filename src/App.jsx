import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loginState, setLoginState] = useState({
    email: '',
    password: ''
  })

  const [search, setSearch] = useState('')

  const handleOnChangeLogin = (e, key) => {
    setLoginState({ ...loginState, [key]: e.target.value })
  }

  const handleSignupForm = (e) => {
    e.preventDefault()
    console.log({ name, email, password })
  }

  const handleLoginForm = (e) => {
    e.preventDefault()
    console.log({ loginState })
  }

  useEffect(() => {
    if (search.length > 2) {
      console.log(`Realizando busca para: ${search}`)
    }
  }, [search])

  return (
    <div>
      <form onSubmit={handleSignupForm}>
        <h1>Formulário de Cadastro</h1>
        <input
          type="text"
          placeholder='Nome completo'
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder='E-mail'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder='Senha'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>

      <form onSubmit={handleLoginForm}>
        <h1>Formulário de Login</h1>
        <input
          type="email"
          placeholder='E-mail'
          required
          value={loginState.email}
          onChange={(e) => handleOnChangeLogin(e, 'email')}
        />

        <input
          type="password"
          placeholder='Senha'
          required
          value={loginState.password}
          onChange={(e) => handleOnChangeLogin(e, 'password')}
        />
        <button type="submit">Entrar</button>
      </form>

      <form>
        <h1>Formulário de Pesquisa</h1>
        <input 
          type='text'
          placeholder='Digite sua busca'
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
        />
      </form>
    </div>
  )
}

export default App