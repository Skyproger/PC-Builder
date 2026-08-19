'use server'

import { redirect } from "next/navigation"
import { signIn } from "@/auth"
import { AuthError } from "next-auth"

export type LoginState = { error?: string }

export async function loginAction(
    _prevState: LoginState | null,
    formData: FormData
): Promise<LoginState> {
    const email = String(formData.get('email')).trim()
    const password = String(formData.get('password')).trim()

    if (!email || !password) {
        return { error: 'Введите email или пароль' }
    }

    try {
        await signIn('credentials', { email, password, redirect: false })
    } catch (error) {
        if (error instanceof AuthError) {
            if (error.type === 'CredentialsSignin') {
                return { error: 'Неверный email или пароль' }
            }
            return { error: 'Ошибка авторизации' }
        }
        throw error
    }

    redirect('/dashboard')
}