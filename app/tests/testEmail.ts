import { sendEmail } from '../actions/sendEmail'

async function testEmailSending() {
  const formData = new FormData()
  formData.append('name', 'Test User')
  formData.append('email', 'test@example.com')
  formData.append('message', 'This is a test message')

  try {
    const result = await sendEmail(formData)
    console.log('Test result:', result)
  } catch (error) {
    console.error('Test error:', error)
  }
}

testEmailSending()

