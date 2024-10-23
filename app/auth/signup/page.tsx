'use client'

import { useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignUpForm } from "@/components/auth";

export default function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();

     

        const res = await signIn('credentials', {
            firstName,
            lastName,
            email,
            password,
            redirect: false,
        });

        setError(null);
    };

    return (
        <div className="border rounded shadow-md py-24 mt-8">
            <h1 className="text-2xl font-bold text-center">WELCOME to ADANI ENERGY HOLDINGS</h1>
            <hr />
            <div className="flex flex-col items-center w-full space-y-2 py-8">
                <Card className="mx-auto max-w-sm">
                    {/* <CardHeader>
                        <CardTitle className="text-xl">Sign Up</CardTitle>
                        <CardDescription>
                            Enter your information to create an account
                        </CardDescription>
                    </CardHeader> */}
                    <CardContent>
                        {/* <form onSubmit={handleSignUp} className="grid gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="first-name">First name</Label>
                                    <Input
                                        id="first-name"
                                        placeholder="Max"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="last-name">Last name</Label>
                                    <Input
                                        id="last-name"
                                        placeholder="Robinson"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            {error && <p className="text-red-500">{error}</p>}
                            <Button type="submit" className="w-full">
                                Create an account
                            </Button>
                        </form> */}

                        <SignUpForm></SignUpForm>
                        <Button
                            onClick={async () => await signIn('google', {
                                callbackUrl: `${window.location.origin}`
                            })}
                            className="w-full shadow-sm mt-4"
                            variant='outline'>
                            <Image width={24} height={24}
                                className="mr-2"
src={'public/web_dark_rd_SU.svg'}                       
         alt='google logo' />
                            Sign up with Google
                        </Button>

                        {/* <Button
                            onClick={async () => await signIn('facebook', {
                                callbackUrl: `${window.location.origin}`
                            })}
                            className="w-full shadow-sm mt-4"
                            variant='outline'>
                            <Image width={24} height={24}
                                className="mr-2"
                                src='/facebook-logo.svg'
                                alt='facebook logo' />
                            Sign up with Facebook
                        </Button> */}
                        <div className="mt-4 text-center text-sm">
                            Already have an account?{" "}
                            <Link href="/login" className="underline">
                                Sign in
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
