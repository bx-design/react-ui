module.exports = Modal = () => ({
  '.modal': {
    '@apply inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full mx-auto z-20 relative':
      {},

    '&-back': {
      '@apply flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 relative':
        {}
    },

    '&-dialog': {
      '@apply fixed z-10 inset-0 overflow-y-auto': {}
    },

    '&-backdrop': {
      '@apply fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-10':
        {}
    },

    '&-centered': {
      '@apply flex': {}
    },

    '&-body': {
      '@apply relative flex flex-col w-full p-8': {}
    },

    '&-header': {
      '@apply relative w-full flex px-8 py-4': {},

      '&-button': {
        '@apply absolute top-4 right-4 z-10': {}
      }
    }
  }
})
