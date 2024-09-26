import Image from 'next/image'
//import React from 'react'
import { Button } from './ui/button'
//import { ButtonProps } from './ui/button'

interface ButtonProps {
    isLoading: boolean,
    className?: string,
    children: React.ReactNode,
}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SubmitButton = ({ isLoading, className, children }: ButtonProps) => {
  return (
    <Button type="submit" disabled={isLoading} className={className ??
    'shad-primary-btn w-full'}>
       {isLoading ? (
         <div className="flex items-center gap-4">
            <Image
              src="/assets/icons/loader.svg"
              alt="loader"
              width={24} 
              height={24}
              className="animate spin"
           />
         </div>
       ): children} 
    </Button>
  )
}

export default SubmitButton
