
1. React Router公式のサンプル通り、以下のコンポーネントを作成する

ScrollToTop.jsx
```typescript
import React from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }
  
  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);
```

2.このコンポーネントを、index.jsx で ReactDOM.render() してるところに以下のように設置する。

index.jsx

```typescript

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ScrollToTop />
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
```

3.リンクをクリックまたは history.push() して画面遷移時に、スクロール位置が先頭に戻る。

この方法の場合、ブラウザで戻る／進むを行った時は、スクロール位置は維持されます。

画面全体が更新されるたびに <ScrollToTop /> が一緒に更新される。

4.なお、公式のページで最初に書かれてる以下のものは、ブラウザで戻る／進むを行った時もスクロール位置が先頭に戻る。

Reactのバージョンが16.8以上の場合は以下が使える。

ScrollToTop.jsx
```typescript

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
```

