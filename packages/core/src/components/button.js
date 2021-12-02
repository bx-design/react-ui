function buttonSolidPrimary() {
  return {
    '&-primary': {
      '@apply border-bx-orange': {},
      '@apply text-white bg-bx-orange': {},
      '@apply hover:border-bx-orange-full hover:bg-bx-orange-full': {},
      '@apply focus:ring-1 focus:ring-bx-orange': {},
      '@apply active:bg-bx-orange-full': {}
    },
    '&-secondary': {
      '@apply border-bx-blue': {},
      '@apply text-white bg-bx-blue': {},
      '@apply hover:border-bx-blue-flip hover:bg-bx-blue-flip': {},
      '@apply focus:ring-1 focus:ring-bx-blue': {},
      '@apply active:bg-bx-blue-flip': {}
    },
    '&-lorange': {
      '@apply border-bx-lorange': {},
      '@apply text-white bg-bx-lorange': {},
      '@apply hover:border-bx-lorange-try hover:bg-bx-lorange-try': {},
      '@apply focus:ring-1 focus:ring-bx-lorange': {},
      '@apply active:bg-bx-lorange-try': {}
    },
    '&-lblue': {
      '@apply border-bx-lblue': {},
      '@apply text-white bg-bx-lblue': {},
      '@apply hover:border-bx-lblue-way hover:bg-bx-lblue-way': {},
      '@apply focus:ring-1 focus:ring-bx-lblue': {},
      '@apply active:bg-bx-lblue-way': {}
    }
  }
}

function buttonSolid() {
  return {
    '&-solid': {
      '@apply shadow-sm': {},
      '@apply border': {},
      '@apply font-bold': {},
      ...buttonSolidPrimary()
    }
  }
}

function buttonOutlinePrimary() {
  return {
    '&-primary': {
      '@apply border-bx-orange': {},
      '@apply text-bx-orange bg-transparent': {},
      '@apply hover:border-bx-orange-full hover:bg-bx-orange-blank': {},
      '@apply focus:ring-1 focus:ring-bx-orange': {},
      '@apply active:bg-bx-orange-blank': {}
    },
    '&-secondary': {
      '@apply border-bx-blue': {},
      '@apply text-bx-blue bg-transparent': {},
      '@apply hover:border-bx-blue-flip hover:bg-bx-blue-cloud': {},
      '@apply focus:ring-1 focus:ring-bx-blue': {},
      '@apply active:bg-bx-blue-cloud': {}
    },
    '&-lorange': {
      '@apply border-bx-lorange': {},
      '@apply text-bx-lorange bg-transparent': {},
      '@apply hover:border-bx-lorange-try hover:bg-bx-lorange-skin': {},
      '@apply focus:ring-1 focus:ring-bx-lorange': {},
      '@apply active:bg-bx-lorange-skin': {}
    },
    '&-lblue': {
      '@apply border-bx-lblue': {},
      '@apply text-bx-lblue bg-transparent': {},
      '@apply hover:border-bx-lblue-way hover:bg-bx-lblue-day': {},
      '@apply focus:ring-1 focus:ring-bx-lblue': {},
      '@apply active:bg-bx-lblue-day': {}
    }
  }
}

function buttonOutline() {
  return {
    '&-outline': {
      '@apply shadow-sm': {},
      '@apply border': {},
      '@apply font-bold': {},
      ...buttonOutlinePrimary()
    }
  }
}

module.exports = Button = () => ({
  '.btn': {
    '@apply relative m-0 inline-flex items-center justify-center flex-shrink-0 align-middle':
      {},
    '@apply font-medium leading-tight': {},
    '@apply transition-colors': {},
    '@apply focus:outline-none': {},
    '@apply outline-none appearance-none select-none whitespace-nowrap': {},

    '&-xs': {
      '@apply px-2 text-xs rounded-2xl h-6': {},
      minWidth: '1.5rem'
    },

    '&-sm': {
      '@apply px-3 text-xs rounded-2xl h-7': {},
      minWidth: '1.75rem'
    },

    '&-md': {
      '@apply h-12 px-4 text-base rounded-2xl': {},
      minWidth: '2rem'
    },

    '&-lg': {
      '@apply h-12 px-6 text-xl rounded-2xl': {},
      minWidth: '2.5rem'
    },

    '&-xl': {
      '@apply h-14 px-6 text-lg rounded-2xl': {},
      minWidth: '3rem'
    },

    '&-disabled': {
      '@apply disabled:shadow-none disabled:cursor-not-allowed disabled:opacity-60':
        {}
    },

    ...buttonSolid(),
    ...buttonOutline()
  }
})
