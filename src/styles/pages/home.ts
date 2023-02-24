import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  //   maxWidth: 'calc(100vw - ((100vw - 1180px)/2))',
  marginLeft: 'auto',
  minHeight: '656px',
  '@media (max-height: 700px)': {
    minHeight: '356px',
  },
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '8px',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '1.25rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0,0,0,0.6)',

    transform: 'translateY(110%)',
    opacity: '0',
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$f20',
      color: '$gray100',
      display: 'block',
      marginBottom: 4,
      lineHeight: 1.6,
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    },

    button: {
      marginTop: 'auto',
      background: '$green500',
      border: 0,
      color: '$white',
      borderRadius: 8,
      padding: '0.75rem',
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
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: '1',
    },
  },
})
