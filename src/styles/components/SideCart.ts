import { styled } from '..'

export const SideCartContainer = styled('aside', {
  padding: '3rem',
  paddingTop: '4.5rem',
  background: '$gray800',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',

  position: 'absolute',
  right: 0,

  minHeight: '100%',
  width: 480,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  transform: 'translateX(110%)',
  opacity: '0',
  transition: 'all 0.2s ease-in-out',

  '&.show': {
    transform: 'translateX(0%)',
    opacity: '1',
  },

  h1: {
    fontSize: '$f20',
    color: '$gray100',
    lineHeight: 1.6,
    marginBottom: '2rem',
  },

  footer: {
    button: {
      width: '100%',

      background: '$green500',
      border: 0,
      color: '$white',
      borderRadius: 8,
      padding: '1.25rem',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '$f18',
      transition: '.1s ease-in-out',

      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',
      },

      '&:not(:disabled):hover': {
        backgroundColor: '$green300',
      },
    },

    h3: {
      display: 'flex',
      justifyContent: 'space-between',
      fontWeight: 'normal',
      lineHeight: 1.6,

      marginBottom: '0.5rem',

      fontSize: '$f16',
      color: '$gray300',
    },

    h2: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      lineHeight: 1.6,

      marginBottom: '3.5rem',

      fontSize: '$f18',
      color: '$gray100',

      strong: {
        fontSize: '$f24',
      },
    },
  },
})

export const CloseButton = styled('button', {
  border: 'none',
  color: '$gray300',
  background: 'none',
  cursor: 'pointer',
  transition: '.1s ease-in-out',
  padding: '.5rem',

  position: 'absolute',
  top: 'calc(24px - .5rem)',
  right: 'calc(24px - .5rem)',

  '&:hover': {
    color: '$gray200',
  },
})

export const Item = styled('article', {
  display: 'flex',
  gap: '1.25rem',
  marginBottom: '1.5rem',

  h1: {
    fontSize: '$f18',
    fontWeight: 'normal',
    lineHeight: 1.6,
    marginBottom: 0,
    color: '$gray300',
  },

  h2: {
    fontSize: '$f18',
    lineHeight: 1.6,
    color: '$gray100',
    marginBottom: '.5rem',
  },

  button: {
    fontSize: '$f16',
    lineHeight: 1.6,
    color: '$green500',
    marginBottom: '.5rem',
    background: 'none',

    border: 'none',
    padding: 0,
    fontWeight: 'bold',

    cursor: 'pointer',
    transition: '.1s ease-in-out',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 100,
  height: 100,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})
