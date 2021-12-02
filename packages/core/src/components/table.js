module.exports = Table = () => ({
  '.table': {
    '@apply min-w-full': {},

    '&-thead': {
      '@apply bg-bx-grey-up border-t border-b border-bx-grey-play': {}
    },

    '&-th': {
      '@apply px-6 py-3 text-bx-grey-mistery text-xs font-extrabold': {}
    },

    '&-tbody': {
      '@apply bg-white': {}
    },

    '&-td': {
      '@apply px-6 py-4 whitespace-nowrap text-xs border-b border-bx-grey-me':
        {}
    },

    '&-tr': {
      '': {}
    }
  }
})
