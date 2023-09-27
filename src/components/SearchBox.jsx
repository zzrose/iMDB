"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBox() {
  const [search, setSearch] = useState('')
  const router = useRouter()
  function handleSubmit(e) {
    e.preventDefault()
    if (!search) return
    router.push(`/search/${search}`)
  }


  return (
    <form 
      onSubmit={handleSubmit}
      className='flex max-w-6xl mx-auto justify-between items-center px-5'>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text" 
        placeholder='Search keywords...' 
        className='w-full h-12 bg-transparent flex-1 outline-none placeholder-gray-500 rounded-sm'
      />
      <button 
        type='submit'
        disabled={!search}
        className='text-amber-600 disabled:text-gray-400'
      >
        Search
      </button>
    </form>
  )
}
