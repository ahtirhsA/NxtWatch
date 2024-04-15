import React from 'react'

const SavedContext = React.createContext({
  isDark: false,
  saveObjFunc: () => {},
  saved: {saveList: [], saveIdList: []},
})

export default SavedContext
