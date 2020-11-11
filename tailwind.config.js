module.exports = {
  theme: {
    container: {
      center: true
    }
  },
  purge: {
    options: {
      whitelist: [/snack/, /top/, /bottom/, /left/, /right/]
    }
  }
};
