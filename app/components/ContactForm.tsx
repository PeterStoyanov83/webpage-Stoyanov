'use client'

import {useState, useRef} from 'react'
import emailjs from '@emailjs/browser'

export default function ContactForm({id}: { id?: string }) {
    const [formData, setFormData] = useState({
        from_name: '',
        reply_to: '',
        service_type: '',
        message: '',
    })
    const [notification, setNotification] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const form = useRef<HTMLFormElement>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value, type} = e.target
        if (type === 'file') {
            setFormData(prev => ({...prev, [name]: (e.target as HTMLInputElement).files}))
        } else {
            setFormData(prev => ({...prev, [name]: value}))
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!form.current) {
            console.error('Form reference is null')
            return
        }

        setIsSubmitting(true)

        try {
            // Ensure NEXT_PUBLIC_EMAILJS_PUBLIC_KEY is set in your environment variables
            const result = await emailjs.sendForm(
                'service_qac64zj',
                'template_vpb2pqh',
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )

            console.log('Email sent successfully:', result.text)
            setFormData({
                from_name: '',
                reply_to: '',
                service_type: '',
                message: '',
            })
            setNotification('Message sent successfully!')
        } catch (err) {
            console.error('Error sending email:', err);
            if (err instanceof Error) {
                console.error('Error details:', err.message);
            } else if (typeof err === 'object' && err !== null) {
                console.error('Error object details:', JSON.stringify(err, null, 2));
            } else {
                console.error('Unknown error type:', typeof err);
            }
            setNotification('Failed to send message. Please try again or contact the administrator.');
        } finally {
            setIsSubmitting(false)
            setTimeout(() => setNotification(''), 3000)
        }
    }

    return (
        <section id={id} className="py-16">
            <div className="container mx-auto px-4">
                <div className="section-bg p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-center mb-8 text-white">Contact</h2>
                    {notification && (
                        <div className={`mb-4 p-2 rounded text-center ${
                            notification.includes('success')
                                ? 'bg-green-100 border border-green-400 text-green-700'
                                : 'bg-red-100 border border-red-400 text-red-700'
                        }`}>
                            {notification}
                        </div>
                    )}
                    <form ref={form} onSubmit={handleSubmit} className="max-w-lg mx-auto">
                        <div className="mb-4">
                            <label htmlFor="from_name" className="block text-white font-bold mb-2">Name</label>
                            <input
                                type="text"
                                id="from_name"
                                name="from_name"
                                value={formData.from_name}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white bg-opacity-20 text-white"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="reply_to" className="block text-white font-bold mb-2">Email</label>
                            <input
                                type="email"
                                id="reply_to"
                                name="reply_to"
                                value={formData.reply_to}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white bg-opacity-20 text-white"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="service_type" className="block text-white font-bold mb-2">Service</label>
                            <select
                                id="service_type"
                                name="service_type"
                                value={formData.service_type}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white bg-opacity-20 text-white"
                            >
                                <option value="">Select a service</option>
                                <option value="Custom Guitar Building">Custom Guitar Building</option>
                                <option value="Repairs and Restorations">Repairs and Restorations</option>
                                <option value="Upgrades and Modifications">Upgrades and Modifications</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-white font-bold mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white bg-opacity-20 text-white"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 disabled:opacity-50"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

