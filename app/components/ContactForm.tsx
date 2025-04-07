'use client'

import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import SectionReveal from './SectionReveal'

interface ContactFormProps {
  id?: string
}

export default function ContactForm({ id }: ContactFormProps) {
  const { t } = useLanguage()
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    file: null as File | null
  })
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormState({
        ...formState,
        file: e.target.files[0]
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus({ ...status, submitting: true })

    const formData = new FormData()
    formData.append('name', formState.name)
    formData.append('email', formState.email)
    formData.append('message', formState.message)
    if (formState.file) {
      formData.append('file', formState.file)
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()
      
      setStatus({
        submitting: false,
        submitted: true,
        success: data.success,
        message: data.message
      })

      if (data.success) {
        setFormState({
          name: '',
          email: '',
          message: '',
          file: null
        })
      }
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: true,
        success: false,
        message: t('errorSubmitting', 'contactForm') as string
      })
    }
  }

  return (
    <div id={id} className="bg-white shadow-xl rounded-lg p-8 max-w-md mx-auto my-12 hover-card">
      <SectionReveal animation="fade-in" delay={100}>
        <h2 className="text-3xl font-bold mb-6 text-center">{t('contactUs', 'contactForm')}</h2>
      </SectionReveal>
      
      {status.submitted && (
        <div className={`mb-4 p-3 rounded ${status.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} animate-scale`}>
          {status.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <SectionReveal animation="slide-up" delay={200}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              {t('name', 'contactForm')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-400"
            />
          </div>
        </SectionReveal>
        
        <SectionReveal animation="slide-up" delay={300}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              {t('email', 'contactForm')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-400"
            />
          </div>
        </SectionReveal>
        
        <SectionReveal animation="slide-up" delay={400}>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              {t('message', 'contactForm')}
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-400"
            ></textarea>
          </div>
        </SectionReveal>
        
        <SectionReveal animation="slide-up" delay={500}>
          <div className="mb-4">
            <label htmlFor="file" className="block text-gray-700 font-medium mb-2">
              {t('attachFile', 'contactForm')}
            </label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-400"
            />
          </div>
        </SectionReveal>
        
        <SectionReveal animation="bounce" delay={600}>
          <button
            type="submit"
            disabled={status.submitting}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-300 transform hover:scale-[1.02] transition-all duration-300 font-medium text-lg"
          >
            {status.submitting ? t('sending', 'contactForm') : t('send', 'contactForm')}
          </button>
        </SectionReveal>
      </form>
    </div>
  )
}