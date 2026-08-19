import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { SignupForm } from "./signup-form"

export default async function Page() {
  const session = await auth()

  if (session?.user) {
    redirect('/dashboard')
  }
  
  return (
    <div className="flex min-h-svh w-full items-center justify-center -mt-18">
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  )
}