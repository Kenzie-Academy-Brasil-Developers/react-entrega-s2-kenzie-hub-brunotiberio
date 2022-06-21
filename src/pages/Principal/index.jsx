import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Main from '../../components/Main'
import Navbar from '../../components/Navbar'
import { api } from '../../services/api'

export default function Principal() {

  const [dados, setDados] = useState({})

  useEffect(() => {
  api.get(`/users/${JSON.parse(localStorage.getItem('@KH/User'))}`)
  .then((response) => setDados(response.data))
  .catch((error) => console.log(error))
  }, [])

  const atualizarCards = () => {
    api.get(`/users/${JSON.parse(localStorage.getItem('@KH/User'))}`)
    .then((response) => setDados(response.data))
    .catch((error) => console.log(error))    
  }

  return (
    <>
        <Navbar/>
        <Header dados={dados}/>
        {<Main atualizarCards={atualizarCards} dados={dados.techs || []}/>}
    </>

  )
}
