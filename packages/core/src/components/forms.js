function formControl() {
  return {
    '.form-control': {
      '@apply w-full relative': {}
    },
    '.form-error-message': {
      '@apply flex items-center text-sm mt-1 text-bx-red-alert min-h-[20px]': {}
    },
    '.form-label': {
      '@apply font-medium text-left align-middle block text-sm mb-3.5': {},
      '&-disabled': {
        '@apply opacity-60': {}
      }
    },
    '.form-required-indicator': {
      '@apply text-bx-orange': {}
    }
  }
}

function formInputGroup() {
  return {
    '.form-input-group': {
      '@apply flex relative': {}
    },

    '.form-input-element': {
      '@apply flex items-center justify-center absolute top-0': {},

      '&-xs': {
        '@apply text-xs h-6 w-6': {}
      },

      '&-sm': {
        '@apply text-xs h-7 w-7': {}
      },

      '&-md': {
        '@apply text-sm h-8 w-8': {}
      },

      '&-lg': {
        '@apply text-base h-10 w-10': {}
      },

      '&-xl': {
        '@apply text-lg h-12 w-12': {}
      }
    }
  }
}

function formField() {
  return {
    '.form-field': {
      '@apply flex relative w-full min-w-0 inline-flex items-center appearance-none focus:outline-none border-bx-lblue-our':
        {},
      '@apply transition-colors	duration-75 ease-out': {},

      '&[aria-invalid=true]': {
        '--tw-border-opacity': '1',
        borderColor: 'rgba(220, 38, 38, var(--tw-border-opacity))',
        '--tw-ring-offset-shadow':
          'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
        '--tw-ring-shadow':
          'var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
        boxShadow:
          'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
        '--tw-ring-opacity': '1',
        '--tw-ring-color': 'rgba(220, 38, 38, var(--tw-ring-opacity))'
      },

      '&-xs': {
        '@apply h-6 px-2 py-0 text-xs rounded-2xl': {}
      },

      '&-sm': {
        '@apply px-3 py-0 text-xs rounded-2xl h-7': {}
      },

      '&-md': {
        '@apply h-8 px-3 py-0 text-sm rounded-2xl': {}
      },

      '&-lg': {
        '@apply h-10 px-4 py-0 text-base rounded-2xl': {}
      },

      '&-xl': {
        '@apply h-12 px-4 py-0 text-base rounded-2xl': {}
      },

      '&-disabled': {
        '@apply disabled:cursor-not-allowed disabled:opacity-60': {},
        '@apply disabled:bg-bx-grey-you': {}
      }
    }
  }
}

function formHelper() {
  return {
    '.form-helper-text': {
      '@apply flex items-center text-sm mt-1 text-gray-600 min-h-[20px]': {}
    }
  }
}

module.exports = Forms = () => ({
  ...formField(),

  '.form-textarea': {
    '@apply py-2 leading-tight': {},
    minHeight: '5rem'
  },

  '.form-select': {
    '@apply pr-10': {}
  },

  ...formControl(),
  ...formInputGroup(),
  ...formHelper()
})
