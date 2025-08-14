class ArgsHandler {
  constructor() {
    this.flags = this.getArgsFlag();
  }

  getArgsFlag() {
    return process.argv.slice(2).reduce((acc, arg) => {
      if (arg.startsWith('--')) {
        const [key, value] = arg.slice(2).split("=");
        acc[key] = value ?? true;
      } else {
        acc._.push(arg);
      }
      return acc;
    }, { _: [] })
  }
}

module.exports = ArgsHandler;

