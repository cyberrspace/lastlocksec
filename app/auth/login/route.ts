import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Send login request to your backend
    const res = await fetch(`${process.env.EXTERNAL_BASE}/estates/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { success: false, message: data.message || "Login failed" },
        { status: res.status }
      );
    }

    const token = data.data.token;

    // Create secure HttpOnly Cookie
    const response = NextResponse.json(
      { success: true, message: "Login successful", estate: data.data.estate },
      { status: 200 }
    );

    response.cookies.set("estateToken", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;

  } catch (error) {
    console.error("Login API error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
