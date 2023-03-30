import { log } from "console"
import {NextPage} from "next"
import { FormEvent, useState} from "react"
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getCsrfToken } from "next-auth/react"

export default function SignIn({ csrfToken }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <form method="post" action="/api/auth/callback/credentials"  className="flex flex-col items-center p-[30vh]">
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label>
      Username
        <input type="text" id="username" name="username" className="border-black border-b-2 h-[35px] w-[300px] outline-none font-semibold text-sm mb-5 py-2 px-4 text-black" />
      </label>
      <label>
        Password
        <input name="password" id="password" type="password" className="border-black border-b-2 h-[35px] w-[300px] outline-none font-semibold text-sm mb-5 py-2 px-4" />
      </label>
      <button type="submit" className="bg-zinc-900 py-2 px-4 text-white">Se connecter</button>
    </form>
    
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  }
}

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//     const session = await getServerSession(context.req, context.res, authOptions);
    
//     // If the user is already logged in, redirect.
//     // Note: Make sure not to redirect to the same page
//     // To avoid an infinite loop!
//     if (session) {
//       return { redirect: { destination: "/" } };
//     }
  
//     const providers = await getProviders();
    
//     return {
//       props: { providers: providers ?? [] },
//     }
//   }