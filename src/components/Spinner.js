import React from 'react'
import { createUseStyles } from 'react-jss'
import { CircularProgress } from '@material-ui/core'
import theme from '../style/theme'

const Spinner = () => {
  const classes = useStyles()
  return (
    <div className={classes.backgroundSpinner}>
      <div className={classes.positionSpinner}>
        <CircularProgress size={60} color='inherit' />
      </div>
    </div>
  )
}

const useStyles = createUseStyles({
  backgroundSpinner: {
    position: 'fixed',
    backgroundColor: theme.colors.whiteFade,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 1
  },
  positionSpinner: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    '-webkit-transform': 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)'
  }
}, { name: 'Spinner' })

export default Spinner
