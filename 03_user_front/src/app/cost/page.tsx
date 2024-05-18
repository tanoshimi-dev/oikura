'use client'


import { useState, useEffect, Fragment, useRef, use } from "react";
import { useSearchParams } from 'next/navigation'
import { Disclosure, RadioGroup, Tab, Popover, Dialog, Transition } from '@headlessui/react'

import Image from 'next/image'
import Link from 'next/link'
import { Guides } from '@/components/Guides'
import { Resources } from '@/components/Resources'
import { HeroPattern } from '@/components/HeroPattern'
import { Libraries } from '@/components/Libraries'

export default function Page() {


  return (
  <div className="bg-white">
    `Hello World!`
    <Libraries />


<Guides />

<Resources />

  </div>
  )
}
