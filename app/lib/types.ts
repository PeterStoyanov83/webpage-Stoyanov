export interface EmailData {
  name: string
  email: string
  message: string
  fileAttached?: string
  timestamp: string
}

export interface ServerActionResponse {
  success: boolean
  message: string
}

