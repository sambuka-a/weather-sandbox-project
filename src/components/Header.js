import React from 'react'
import '../index.css'
import { CloudTwoTone } from '@ant-design/icons';

import SearchForm from '../features/search/SearchForm'
import Suggestions from '../features/suggestions/Suggestions';

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
          <div className='formSuggestions'>
            <SearchForm/>
            <Suggestions/>
          </div>
        </div>
    </div>
  )
}

export default Header
