# Spring Number Flow

Animated number transitions with spring physics for React.

## Installation

```bash
npm install spring-number-flow @number-flow/react
```

## Usage

```tsx
'use client'

import { useState } from 'react'
import { SpringNumberFlow } from 'spring-number-flow'

export default function MyComponent() {
  const [value, setValue] = useState(1234)

  return (
    <div>
      <SpringNumberFlow value={value} />
      <button onClick={() => setValue(value + 100)}>Add 100</button>
    </div>
  )
}
```

## Formats

```tsx
// Currency
<SpringNumberFlow value={99.99} format={{ style: 'currency', currency: 'USD' }} />

// Percentage
<SpringNumberFlow value={0.42} format={{ style: 'percent' }} />

// Compact
<SpringNumberFlow value={1500000} format={{ notation: 'compact' }} />
```

## Documentation

[aaezekiel.co/notes/spring-number-flow](https://aaezekiel.co/notes/spring-number-flow)

## License

MIT
