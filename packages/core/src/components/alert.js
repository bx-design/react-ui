module.exports = Alert = () => ({
  '.alert': {
    '@apply flex items-center relative py-4 px-6': {},

    '&-danger': {
      '@apply border border-bx-red-alert rounded-xl bg-bx-red-clean text-bx-red-alert':
        {}
    },

    '&-icon': {
      '@apply flex justify-center mr-2': {}
    },

    '&-content': {
      '@apply font-bold text-lg': {}
    }
  }
})
