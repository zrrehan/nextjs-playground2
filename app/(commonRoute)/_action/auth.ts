"use server";
import { envVar } from "@/utils/envVar";
import { cookies } from "next/headers";

export async function loginAction(state: number|null, formData: FormData) {
    const email = formData.get('email');
    const password = formData.get('password');

    if(!email || !password) {
        return {
            success: false, 
            message: "Enter Email and Password"
        }
    }

    const url = `${envVar.backendUrl}/auth/login`;
    const response = await fetch(url, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email, password
        }), 
        cache: "no-store",
    })
    const result = await response.json();

    const {accessToken, refreshToken} = result?.data || {};
    const cookieStore = await cookies();
    cookieStore.set("accessToken", accessToken);
    cookieStore.set("refreshToken", refreshToken);
    
    return result;
}