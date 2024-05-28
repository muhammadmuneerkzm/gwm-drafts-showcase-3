'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function GoBack() {
  const router = useRouter()
  return (
    <i class='bx text-gray-400 bxs-left-arrow-circle absolute text-lg p-2'  onClick={() => router.back()}></i>
  )
}
