module.exports = Checkbox = () => ({
  '.form-checkbox': {
    '@apply rounded': {},
    backgroundColor: 'inherit',
    '@apply border border-bx-orange': {},
    '&[aria-invalid=true]': {
      '@apply bg-bx-orange': {}
    },
    '&[aria-invalid=true]:hover': {
      '@apply bg-bx-orange': {}
    },

    '@apply focus:ring-0 focus:shadow-none': {},

    '@apply checked:bg-bx-orange': {},

    '&[type="checkbox"]:checked': {
      '@apply bg-bx-orange': {}
    },

    '&-sm': {
      '@apply w-3 h-3': {}
    },

    '&-md': {
      '@apply w-4 h-4': {}
    },

    '&-lg': {
      '@apply w-5 h-5': {}
    },

    '&-xl': {
      '@apply w-6 h-6': {}
    },

    // disabled
    '&-disabled': {
      '@apply disabled:opacity-60': {}
    },

    '&-label': {
      '@apply ml-2 select-none text-sm': {},

      '&-sm': {
        '@apply text-xs': {}
      },

      '&-md': {
        '@apply text-sm': {}
      },

      '&-lg': {
        '@apply text-base': {}
      },

      '&-xl': {
        '@apply text-lg': {}
      }
    }
  }
})
