import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey)

export async function POST(req: NextRequest) {
  try {
    const { email, userType } = await req.json()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }
    
    // Insert into Supabase
    const { error } = await supabase
      .from("waitlist")
      .insert([{ email, user_type: userType }])
    
    if (error) {
      if (error.code === "23505") { // unique_violation
        return NextResponse.json({ error: "This email is already on the waitlist." }, { status: 400 })
      }
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    
    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
} 