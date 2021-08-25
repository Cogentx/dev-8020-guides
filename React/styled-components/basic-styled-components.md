# 80-20 Guide to React

## CSS Styling

### Styled Components

```javascript
import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <HeaderContainer>
      {/* Header Left */}
      <HeaderLeft>
        <HeaderAvatar>{/* TODO: add onclick */}</HeaderAvatar>
      </HeaderLeft>
      {/* Header Search */}
      {/* Header Right */}
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div``;

const HeaderLeft = styled.div``;
```
