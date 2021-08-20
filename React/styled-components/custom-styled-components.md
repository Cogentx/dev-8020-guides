# 80-20 Guide to React

## CSS Styling

### Styled Components

Instead of using the normal **styled.div**, use **styled(Avatar)** to create a custom Avatar component based on the **imported** Avatar icon in this example.

```javascript
import React from 'react';
import styled from 'styled-components';
import {Avatar} from '@material-ui/core';

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

const HeaderAvatar = styled(Avatar)``;
```
