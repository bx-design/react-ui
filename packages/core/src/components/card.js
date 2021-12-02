module.exports = Card = () => ({
  '.card': {
    '@apply rounded-2xl bg-white': {},
    boxShadow:
      '0px 6px 12px rgba(24, 39, 75, 0.12), 0px 8px 24px rgba(24, 39, 75, 0.08);',

    '&-body': {
      '@apply p-7 flex-1 rounded-2xl': {}
    },

    '&-header': {
      '@apply p-7 flex-1 rounded-t-2xl': {}
    },

    '&-footer': {
      '@apply p-7 flex-1 rounded-b-2xl': {}
    }
  }
})
