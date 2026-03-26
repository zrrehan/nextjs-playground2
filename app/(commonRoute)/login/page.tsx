"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginAction } from "../_action/auth";
import { useActionState, useEffect } from "react";
import { FormSubmitButton } from "../_component/shared/FormSubmitButton";

export default function Login() {
    const [state, formAction, isPending] = useActionState(loginAction, null);
    console.log(state, isPending);
    useEffect(() => {
        if(state == null) return 
        alert(state.message);
    }, [state])
    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <form action={formAction} className="space-y-3">
                <Input 
                    name = "email"
                    type="email"
                    placeholder="Email"
                    className="w-full px-3 py-2 border rounded"
                />
                <Input 
                    name = "password"
                    type="password"
                    placeholder="Password"/>

                <FormSubmitButton loading={isPending}>Login</FormSubmitButton>
            </form>
        </div>
    );
}