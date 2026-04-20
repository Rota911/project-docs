# Documentation Style Guide

Internal docs for our dev team. Keep it short, code-heavy, zero bullshit.

## Rules

### DON'T Write

- ❌ Marketing language ("powerful", "robust", "amazing")
- ❌ Feature lists with checkmarks
- ❌ "Benefits" sections
- ❌ Long explanations
- ❌ "Best practices" that are obvious
- ❌ Troubleshooting sections (devs figure it out)
- ❌ Migration guides
- ❌ Introductory paragraphs
- ❌ Redundant examples
- ❌ Books - we don't read books

### DO Write

- ✅ Function signatures with full type annotations
- ✅ Code examples (1-3 per function max)
- ✅ One-line descriptions
- ✅ Parameter and return types
- ✅ Actual code that works
- ✅ Tables for reference data (flags, enums)
- ✅ Blockquotes (>) for critical notes only

## Structure

```markdown
# ModuleName

One sentence about what it does. Access via `LS.ModuleName`.

## FunctionName

\`\`\`lua
---@param param1 type
---@param param2? type
---@return returnType
LS.ModuleName:FunctionName(param1, param2)
\`\`\`

Brief description if needed (1 line max).

\`\`\`lua
-- Example
local result = LS.ModuleName:FunctionName("value", 123)
\`\`\`

## NextFunction

...
```

## File Organization

For resources with multiple services/modules, split into separate pages:

```
app/resources/core/resource_name/
├── _meta.js
└── server/
    ├── _meta.js
    ├── ServiceName/
    │   └── page.mdx
    ├── OtherService/
    │   └── page.mdx
    └── Events/
        └── page.mdx
```

Example `_meta.js`:
```js
export default {
    Account: "Account",
    Card: "Card",
    Transaction: "Transaction",
    Events: "Events",
};
```

Guidelines:
- One service/module per page
- Keep pages under 150 lines
- Use `Events/page.mdx` for event documentation
- Use `Types/page.mdx` if you need type references

## Example Patterns

### Simple Function

```markdown
## Add

\`\`\`lua
---@param a number
---@param b number
---@return number
LS.Math:Add(a, b)
\`\`\`

\`\`\`lua
local sum = LS.Math:Add(5, 3)  -- 8
\`\`\`
```

### Function with Options

```markdown
## Create

\`\`\`lua
---@param data CreateData
---@return boolean success
LS.Thing:Create(data)
\`\`\`

\`\`\`lua
---@class CreateData
---@field name string
---@field value number?
---@field options table?
\`\`\`

\`\`\`lua
LS.Thing:Create({
    name = "test",
    value = 100
})
\`\`\`
```

### Reference Table

```markdown
## Flags

\`\`\`lua
---@alias MyFlags integer
---| 1   FLAG_ONE
---| 2   FLAG_TWO
---| 4   FLAG_THREE
---| 7   FLAG_ALL
\`\`\`
```

### Important Note

```markdown
> Requires `resource_name` to be started.
```

## Length Guidelines

- Module intro: 1 line
- Function description: 0-1 lines
- Code example: 1-3 lines
- Total doc page: Usually 50-150 lines max
- If over 200 lines, you're writing too much

## What to Skip

- Installation instructions (obvious)
- "Getting started" sections
- Performance tips (write good code)
- Common pitfalls (learn from errors)
- FAQ sections
- Changelog/history
- Author/credits
- License info

## Code Style in Examples

- Real code that actually runs
- Use realistic values, not "foo/bar"
- Show return values when relevant
- Comment output when helpful: `-- Output: [INFO] Message`
- Keep examples minimal

## Type Annotations

Always include:
- `---@param` for parameters
- `---@return` for returns
- `---@class` for complex types
- `---@field` for class properties
- `---@alias` for type aliases

## Commands/CLI Reference

Use table format:

```markdown
## Commands

\`\`\`
command:name <required> [optional]  -- Description
command:other <arg>                 -- Another one
\`\`\`

Examples:
\`\`\`
command:name value123
command:other test true
\`\`\`
```

## Remember

We're documenting for **ourselves**, not outsiders. Team knows the codebase. Skip the hand-holding. Just show syntax, types, and quick examples.

If you're writing more than 150 lines for a module, you're doing it wrong.