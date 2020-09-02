# 80-20 Guide to Angular

## Schematics - Fundamentals

### Angular Generate Command with Schematics

One **command** you will use a lot is **generate**.

`ng generate --help` will give you a list of available generate options and available **schematics**.

Each of these **schematics** also has their own set of options.

The top ones to know are:

- components
- directives
- modules

### Using 3rd Party Schematics

made possible by using the `ng add` command

- it points to an NPM package schematic that tells the CLI how to generate the code for the project.

- some examples are installing a theme such as:
  - ionic
  - nebular

- as well as installing and configuring packages such as firebase

