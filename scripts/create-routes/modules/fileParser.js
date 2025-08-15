const fs = require('node:fs/promises');
const recast = require('recast');
const { parse } = require("@babel/parser")

class FileParser {
  async readFiles(path) {
    return await fs.readFile(path, { encoding: 'utf-8' });
  }

  async writeFiles(path, data) {
    return await fs.writeFile(path, data);
  }

  async replaceCode({ path, function_name, new_code }) {
    const code = await this.readFiles(path);

    const ast = recast.parse(code, {
      parser: {
        parse(source) {
          return parse(source, {
            sourceType: "module",
            plugins: ["classProperties", "jsx", "typescript"],
          });
        },
      },
    });

    recast.types.visit(ast, {
      visitClassMethod(path) {
        const { node } = path;
        if (
          node.key.type === "Identifier" &&
          node.key.name === function_name
        ) {

          const newBody = recast.parse(new_code, {
            parser: {
              parse(source) {
                return parse(source, {
                  sourceType: "module",
                  plugins: ["classProperties", "jsx", "typescript"],
                });
              },
            },
          }).program.body;

          node.body.body = newBody;
        }
        this.traverse(path);
      },
    });


    return recast.print(ast).code;
  }

  async addMethod({ path, method_template }) {
    const code = await this.readFiles(path);

    const ast = recast.parse(code, {
      parser: {
        parse(source) {
          return parse(source, {
            sourceType: "module",
            plugins: ["classProperties", "jsx", "typescript"],
          });
        },
      },
    });

    recast.types.visit(ast, {
      visitClassDeclaration(path) {
        const { node } = path;

        if (node.id && node.id.name === "ChromeMessageHandler") {
          // Wrap o método em uma classe fake pra parsear
          const wrapped = `class Dummy { ${method_template} }`;

          const parsed = recast.parse(wrapped, {
            parser: {
              parse(source) {
                return parse(source, {
                  sourceType: "module",
                  plugins: ["classProperties", "jsx", "typescript"],
                });
              },
            },
          });

          // Extrai o método do corpo da classe Dummy
          const dummyClass = parsed.program.body[0];
          const newMethod = dummyClass.body.body[0];

          // Push no final da classe real
          node.body.body.push(newMethod);
        }

        return false;
      },
    });

    return recast.print(ast).code;
  }

}

module.exports = FileParser;