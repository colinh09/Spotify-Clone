import { getProviders, signIn } from "next-auth/react";

function Login({providers}) {
  console.log(providers);
  return (
    <div>
      <img className="w-52 mb-5" src = "https://yt3.ggpht.com/ytc/AMLnZu99OK9pxlnPVKzzvMOKXC46v13JsORp6wYPGBiioQ=s900-c-k-c0x00ffffff-no-rj" alt ="" />
      {Object.values(providers).map((provider) => ( 
        <div>
          <button>Login with {provider.name}</button>
        </div> 
      ))}
    </div>
  )
}

export default Login

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers
    },
  }
}