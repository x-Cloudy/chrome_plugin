class ArgsHandler {
  constructor() {
    this.flags = this.getArgsFlag();
  }

  getArgsFlag() {
    let args = process.argv.slice(2);
    if ((!args || args.length === 0) && process.env.npm_config_argv) {
      try {
        const parsed = JSON.parse(process.env.npm_config_argv);
        if (Array.isArray(parsed.remain) && parsed.remain.length > 0) {
          args = parsed.remain;
        } else if (Array.isArray(parsed.original) && parsed.original.length > 0) {
          const orig = parsed.original;
          const dashIndex = orig.indexOf('--');
          if (dashIndex !== -1) {
            args = orig.slice(dashIndex + 1);
          } else {
            args = orig.slice(2);
          }
        } else if (Array.isArray(parsed.cooked) && parsed.cooked.length > 0) {
          const cooked = parsed.cooked;
          const dashIndex = cooked.indexOf('--');
          args = dashIndex !== -1 ? cooked.slice(dashIndex + 1) : cooked.slice(2);
        }
      } catch (e) {
      }
    }

    const acc = { _: [] };

    for (let i = 0; i < args.length; i++) {
      const arg = args[i];

      if (typeof arg !== 'string') continue;

      if (arg.startsWith('--')) {
        const after = arg.slice(2);
        if (after.includes('=')) {
          const [key, rawVal] = after.split('=');
          acc[key] = this._coerceType(rawVal);
        } else {
          const next = args[i + 1];
          if (next !== undefined && !String(next).startsWith('--')) {
            acc[after] = this._coerceType(next);
            i++;
          } else {
            acc[after] = true;
          }
        }
      } else {
        acc._.push(arg);
      }
    }

    return acc;
  }

  _coerceType(value) {
    if (value === 'true') return true;
    if (value === 'false') return false;
    if (!isNaN(value) && value !== '') {
      return value.includes('.') ? parseFloat(value) : parseInt(value, 10);
    }
    return value;
  }
}

module.exports = ArgsHandler;

