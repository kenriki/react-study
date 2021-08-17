
# コンポーネントのテストのメモ

## セットアップと後始末

> それぞれのテストにおいて、通常われわれは React ツリーを document に結びついた DOM 要素として描画することになります。これは DOM イベントを受け取れるようにするために重要です。テストが終了した際に「クリーンアップ」を行い、document からツリーをアンマウントします。
このためによく行うのは beforeEach と afterEach ブロックのペアを使い、それらを常に実行することで、各テストの副作用がそれ自身にとどまるようにすることです。

> 仮にテストが失敗した場合でもクリーンアップコードを実行するようにする

### ポイント

```typescript

import { unmountComponentAtNode } from "react-dom";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

```

## act()

> 与えられた props に対してコンポーネントが正しくレンダーされているかをテストする

### ポイント
```typescript

act(() => {
    // render components
    render(<Hello />, container);
  });
// make assertions
expect(container.textContent).toBe("Hey, stranger");

```

### テスト対象ファイル

```typescript

// hello.js

import React from "react";

export default function Hello(props) {
  if (props.name) {
    return <h1>Hello, {props.name}!</h1>;
  } else {
    return <span>Hey, stranger</span>;
  }
}
```

### テスト構成ファイル

```typescript
// hello.test.js

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Hello from "./hello";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
  act(() => {
    render(<Hello />, container);
  });
  expect(container.textContent).toBe("Hey, stranger");

  act(() => {
    render(<Hello name="Jenny" />, container);
  });
  expect(container.textContent).toBe("Hello, Jenny!");

  act(() => {
    render(<Hello name="Margaret" />, container);
  });
  expect(container.textContent).toBe("Hello, Margaret!");
});

```

# 参考
[https://ja.reactjs.org/docs/testing-recipes.html](https://ja.reactjs.org/docs/testing-recipes.html)
