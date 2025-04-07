'use server'

import fs from 'fs/promises'
import path from 'path'
import { validateFormData } from '../lib/validation'
import { EmailError } from '../lib/exceptions'
import type { EmailData, ServerActionResponse } from '../lib/types'

export async function sendEmail(formData: FormData): Promise<ServerActionResponse> {
  try {
    // Validate form data
    validateFormData(formData)

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string
    const file = formData.get('file') as File | null

    const emailData: EmailData = {
      name,
      email,
      message,
      fileAttached: file ? file.name : 'No file attached',
      timestamp: new Date().toISOString(),
    }

    // Log the email data to the console
    console.log('Sending email with data:', JSON.stringify(emailData, null, 2));
    console.log('File attached:', file ? file.name : 'No file attached');

    // Save the email data to a JSON file - using app directory for consistent path
    const dataDir = path.join(process.env.APP_DIR || process.cwd(), 'data')
    const filePath = path.join(dataDir, 'emails.json')
    
    try {
      // Ensure the data directory exists
      try {
        await fs.mkdir(dataDir, { recursive: true })
      } catch (dirError) {
        console.error('Error creating data directory:', dirError)
        throw new EmailError('Failed to create data storage directory')
      }
      
      let emails: EmailData[] = []
      try {
        const fileContent = await fs.readFile(filePath, 'utf-8')
        emails = JSON.parse(fileContent)
        if (!Array.isArray(emails)) {
          throw new Error('Invalid emails data format')
        }
      } catch (readError) {
        // File doesn't exist or is empty, start with an empty array
        if (readError instanceof Error && !readError.message.includes('ENOENT')) {
          console.error('Error reading emails file:', readError)
        }
      }
      emails.push(emailData)
      await fs.writeFile(filePath, JSON.stringify(emails, null, 2))
    } catch (error) {
      console.error('Error saving email data:', error)
      throw new EmailError('Failed to save email data')
    }

    // Simulate a delay to mimic email sending
    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log('Email sent successfully');

    return {
      success: true,
      message: 'Message sent successfully!'
    }
  } catch (error) {
    if (error instanceof EmailError || error instanceof Error) {
      return {
        success: false,
        message: error.message
      }
    }
    return {
      success: false,
      message: 'An unexpected error occurred'
    }
  }
}

