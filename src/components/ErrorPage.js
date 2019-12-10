import React from 'react'
import { createUseStyles } from 'react-jss'
import { ReactComponent as Icon } from '../icons/vivid-angle-top-left.svg'
import theme from '../style/theme'

const ErrorPage = () => {
  const classes = useStyles()
  return (
    <div className={classes.backgroundError}>
      <div className={classes.positionError}>
        <Icon className={classes.icon} />
        <h1 className={classes.title}>
          An error occured
        </h1>
        <div className={classes.text}>
          <p>We are sorry, all our team is working on this issue.</p>
          <p>During this time you can see our <a href='/' className={classes.link}>list of events</a></p>
        </div>
        <Icon className={classes.iconEnd} />
      </div>
    </div>
  )
}

const useStyles = createUseStyles({
  backgroundError: {
    backgroundImage: 'url("/origami.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    '@media (max-width: 768px)': {
      backgroundSize: '100% 35%'
    }
  },
  positionError: {
    position: 'absolute',
    left: '50px',
    top: '15%',
    '@media (max-width: 768px)': {
      left: '50%',
      top: '100px',
      width: '75%',
      '-webkit-transform': 'translate(-50%, -50%)',
      transform: 'translate(-50%, -50%)'
    }
  },
  title: {
    textAlign: 'center'
  },
  text: {
    paddingLeft: 20,
    paddingRight: 20,
    position: 'relative'
  },
  icon: {
    position: 'absolute',
    left: 0,
    top: 5,
    width: 11,
    height: 11,
    fill: 'currentColor'
  },
  iconEnd: {
    position: 'absolute',
    right: 0,
    bottom: 5,
    width: 11,
    height: 11,
    fill: 'currentColor',
    transform: 'rotate(0.5turn)'
  },
  link: {
    fontSize: '17px',
    color: theme.colors.primary,
    '&, &:hover, &:focus': {
      textDecoration: 'none'
    }
  }
}, { name: 'ErrorPage' })

export default ErrorPage
