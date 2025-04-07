'use client'

import { useLanguage } from '../contexts/LanguageContext'

export default function PrivacyPolicy() {
    const { t } = useLanguage()
    const personalDataItems = t('personalDataItems', 'privacyPolicy') as string[]
    const useOfDataItems = t('useOfDataItems', 'privacyPolicy') as string[]
    const contactItems = t('contactItems', 'privacyPolicy') as string[]
    
    return (
        <div className="container mx-auto px-4 md:px-20 py-16 pt-32">
            <h1 className="text-3xl font-bold mb-8">{t('title', 'privacyPolicy')}</h1>
            <p className="mb-4">{t('lastUpdated', 'privacyPolicy')}</p>
            <p className="mb-4">{t('introduction', 'privacyPolicy')}</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">{t('collectionTitle', 'privacyPolicy')}</h2>
            <p className="mb-4">{t('collectionText', 'privacyPolicy')}</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">{t('typesTitle', 'privacyPolicy')}</h3>
            <h4 className="text-lg font-semibold mt-4 mb-2">{t('personalDataTitle', 'privacyPolicy')}</h4>
            <p className="mb-4">{t('personalDataText', 'privacyPolicy')}</p>
            <ul className="list-disc list-inside mb-4 pl-4">
                {personalDataItems.map((item, index) => (
                    <li key={index} className="mb-1">{item}</li>
                ))}
            </ul>

            <h4 className="text-lg font-semibold mt-4 mb-2">{t('usageDataTitle', 'privacyPolicy')}</h4>
            <p className="mb-4">{t('usageDataText', 'privacyPolicy')}</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">{t('useOfDataTitle', 'privacyPolicy')}</h2>
            <ul className="list-disc list-inside mb-4 pl-4">
                {useOfDataItems.map((item, index) => (
                    <li key={index} className="mb-1">{item}</li>
                ))}
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">{t('changesTitle', 'privacyPolicy')}</h2>
            <p className="mb-4">{t('changesText1', 'privacyPolicy')}</p>
            <p className="mb-4">{t('changesText2', 'privacyPolicy')}</p>
            <p className="mb-4">{t('changesText3', 'privacyPolicy')}</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">{t('contactTitle', 'privacyPolicy')}</h2>
            <p className="mb-4">{t('contactText', 'privacyPolicy')}</p>
            <ul className="list-disc list-inside mb-4 pl-4">
                {contactItems.map((item, index) => (
                    <li key={index} className="mb-1">{item}</li>
                ))}
            </ul>
        </div>
    )
}