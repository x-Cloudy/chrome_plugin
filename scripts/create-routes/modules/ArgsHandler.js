class ArgsHandler {
  constructor() {
    this.flags = this.getArgsFlag();
  }

  getArgsFlag() {
    const args = process.argv.slice(2);
    const acc = { _: [] };

    for (let i = 0; i < args.length; i++) {
      const arg = args[i];

      if (arg.startsWith("--")) {
        const [key, value] = arg.slice(2).split("=");

        if (value !== undefined) {
          acc[key] = value;
        } else if (args[i + 1] && !args[i + 1].startsWith("--")) {
          acc[key] = args[i + 1];
          i++;
        } else {
          acc[key] = true;
        }
      } else {
        acc._.push(arg);
      }
    }

    return acc;
  }
}

module.exports = ArgsHandler;

