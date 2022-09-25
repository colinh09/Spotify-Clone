import { getProviders, signIn } from "next-auth/react";

function Login({providers}) {
  return (
    <h1>This is a login page</h1>
  )
}

export default Login

export async function getSeverSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers
    }
  }
}