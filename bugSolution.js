```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Add an empty dependency array to run the effect only once after the initial render
    // Or add a dependency that only runs when it updates 
    console.log('Effect ran');
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
```