import React from 'react'
import { CloudTwoTone } from '@ant-design/icons';

import '../index.css'

import SearchForm from '../features/search/SearchForm'
import { useCleanup } from '../features/search/use-cleanup'

const Header = () => {
  const cleanUp = useCleanup()

  return (
    <div className='wrapper'>
      <div className='header'>
      <CloudTwoTone className='logo' 
        twoToneColor="rgb(152, 219, 167)"
        onClick={cleanUp} 
      />
      <SearchForm />
      </div>
    </div>
  )
}

export default Header
