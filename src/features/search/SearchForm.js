import React from 'react'
import { useSearch } from './use-search'

import { Input } from 'antd';
import '../../index.css'

const {Search} = Input;

const SearchForm = () => {
    const [search, handleSearch] = useSearch()
  return (
    <div>
        <Search className='searchForm'
          placeholder="Region"
          size='large'
          value={search}
          onChange={handleSearch}
          onSearch={() => {}}
        />
    </div>
  )
}

export default SearchForm