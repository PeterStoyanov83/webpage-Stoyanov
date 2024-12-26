import { ValidationError } from './exceptions'

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw new ValidationError('Invalid email format')
  }
  return true
}

export function validateFormData(formData: FormData): void {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  if (!name || name.trim().length < 2) {
    throw new ValidationError('Name must be at least 2 characters long')
  }

  validateEmail(email)

  if (!message || message.trim().length < 10) {
    throw new ValidationError('Message must be at least 10 characters long')
  }
}

