# fabric-react-jsonschema-form

Plugin for [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form) to use components in [office-ui-fabric-react](https://github.com/OfficeDev/office-ui-fabric-react).

Some components are not yet or not fully supported.

## Playground

Try it out in the [playground](https://billytrend.github.io/react-jsonschema-form/).

## Quick start

`npm i -s fabric-react-jsonschema-form`

then...

```
import { allWidgets, fabricFields } from "fabric-react-jsonschema-form";
...
render() {
  return <Form
    schema={{ type: "string", title: "Hello world" }}
    widgets={allWidgets}
    {...fabricFields}
  </Form>
}
```
