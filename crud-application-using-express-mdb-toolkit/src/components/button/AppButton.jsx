

import { Button } from '@mui/material'
import React from 'react'

const AppButton = ({text, onClick, color}) => {
  return (
    <div>
        <Button sx={{color: color}} onClick={onClick}>{text}</Button>
    </div>
  )
}

export default AppButton