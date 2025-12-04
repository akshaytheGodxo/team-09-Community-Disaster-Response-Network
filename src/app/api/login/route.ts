import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createClient } from "@/lib/client";
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {email, password} = body;

        if (!email || !password) {
            return new Response(JSON.stringify({error: "Email and password are required"}), {status: 400});
        }

        const supabase = createClient();

        const {data: users, error} = await supabase.from("Test Table").select("*").eq("email", email).single();

        if (error || !users) {
            return new Response(JSON.stringify({error: "Invalid email or password"}), {status: 401});
        }

        const user = users[0];
        console.log(user);
        const validPass = await bcrypt.compare(password, user.password);
        if (!validPass) {
            return new Response(JSON.stringify({error: "Invalid email or password"}), {status: 401});
        }

        const token = await jwt.sign(
            {id: user.id, email: user.email, role: user.role},
            process.env.JWT_SECRET || "defaultsecret",
            {expiresIn: "1h"}
        );

        const cookieStore = await cookies();
        cookieStore.set("token", token, {
            httpOnly: true,
            maxAge: 7*24*60*60,
            path: "/",
        });
        return NextResponse.json(
            {message: "Login successful", token},
            {status: 200}
        )
    } catch (error) {
        return NextResponse.json({error: "Server error"}, {status: 500});
    }
}