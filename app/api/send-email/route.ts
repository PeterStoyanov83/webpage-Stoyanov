import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '../../actions/sendEmail'

export async function POST(request: NextRequest) {
  try {
    // Get form data from the request
    const formData = await request.formData()
    
    // Call the server action to send the email
    const result = await sendEmail(formData)
    
    // Return the result
    return NextResponse.json(result)
  } catch (error) {
    console.error('Error in email API route:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : 'An unexpected error occurred' 
      },
      { status: 500 }
    )
  }
}