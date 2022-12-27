import { styled } from '..'

export const CardButtonContainer = styled('button', {
  background: '$gray800',
  border: 0,
  borderRadius: 8,
  padding: '0.75rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '$md',
  transition: '.1s ease-in-out',

  position: 'relative',

  color: '#C4C4CC',

  '&:disabled': {
    color: '#8D8D99',
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$green500',

    span: {
      backgroundColor: '$green300',
    },
  },

  span: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    width: 24,
    height: 24,

    position: 'absolute',

    right: -13,
    top: -13,
    boxSizing: 'content-box',

    background: '$green500',
    border: '3px solid $gray900',
    borderRadius: 9999,

    transition: '.1s ease-in-out',
  },
})
