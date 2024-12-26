'use client'

import { Service } from '../data/services'

interface ServiceData {
  id: string;
  name: string;
  images: string[];
  shortDescription: string;
  longDescription: string;
  servicesList: string[];
}

interface ServiceDetailsWrapperProps {
  service: ServiceData;
  iconName: string;
}

import ServiceDetails from './ServiceDetails'

export default function ServiceDetailsWrapper({ service, iconName }: ServiceDetailsWrapperProps) {
  return <ServiceDetails {...service} iconName={iconName} />
}

