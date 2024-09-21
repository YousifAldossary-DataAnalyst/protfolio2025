'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { Button } from '../ui/button';

const HireMe = () => {
    const router = useRouter();
  
    const onClick = (href: string) => {
      router.push(href);
    };
  return (
    <div className="flex items-center justify-center pt-2 xl:flex-none xl:pt-0">
    <Link href="/contact">
      <Button onClick={() => onClick("/contact")}>Learn more</Button>
    </Link>
  </div>
  )
}

export default HireMe