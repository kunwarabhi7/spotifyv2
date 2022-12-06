import {getProviders,signIn} from 'next-auth/react'


const login = ({providers}) => {
  return (
    <div>
{Object.values(providers).map((provider)=>(
  <div>Login With {provider.name}</div>
))}
    </div>
  )
}

export default login

export async function getServerSideProps(){
  const providers = await getProviders();
  return {
    props:{
      providers,
    }
  }
}