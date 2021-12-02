/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')
const { fontFamily } = require('tailwindcss/defaultTheme')

const { colors } = require('./colors')

const Alert = require('./components/alert')
const Button = require('./components/button')
const Card = require('./components/card')
const Checkbox = require('./components/checkbox')
const Forms = require('./components/forms')
const Modal = require('./components/modal')
const Table = require('./components/table')

const components = [Alert, Button, Card, Checkbox, Forms, Modal, Table]

module.exports = plugin.withOptions(
  () => {
    return function ({ addComponents, addBase }) {
      addComponents(
        components.map(component => component()),
        {
          respectPrefix: false
        }
      )
      addBase({
        html: {
          'min-width': '360px'
        },
        'html, body': {
          '@apply bg-white': {}
        },
        body: {
          '@apply relative font-sans min-h-full h-full': {},
          fontSize: '16px',
          color: 'var(--bx-fg)',
          scrollBehavior: 'smooth'
        },
        'h1, h2, h3, h4, h5, h6': {
          '@apply font-heading': {}
        },
        '::selection': {
          '@apply text-white': {},
          textShadow: 'none',
          background: 'rgba(0,0,0,0.99)'
        },
        a: {
          '@apply transition-colors': {}
        }
      })
    }
  },
  function () {
    return {
      theme: {
        extend: {
          colors,
          fontFamily: {
            ...fontFamily,
            sans: ['Lato', ...fontFamily.sans],
            heading: ['Mont', ...fontFamily.sans]
          }
        }
      },
      variants: {
        extend: {}
      }
    }
  }
)
