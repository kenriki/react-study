# ReactでTypeScriptを使うとき基本として知っておきたいこと

1. 関数コンポーネント  
> 普通の関数と同じく、引数を型づけしてください。JSXの要素を返せば戻り値は推論される。

```typescript
type AppProps = { message: string }; // interfaceでもよい
const App = ({ message }: AppProps) => <div>{message}</div>;

```

> 戻り値を型づけする場合には、`JSX.Element` です。正しい値が返されなければ、エラーが示されます。

```typescript
const App = ({ message }: AppProps): JSX.Element => <div>{message}</div>;

```

> 型エイリアスやインタフェースは定めずに、型注釈を直接書き加えても構いません。型をほかで使わないときは、この方が簡単です。

```typescript
const App = ({ message }: { message: string }) => <div>{message}</div>;

```

> 引数と戻り値をそれぞれ定めるのでなく、関数そのものに型づけすることもできます。

> ただし、コンポーネントの関数を`React.FunctionComponent`または`React.FC`で型づけするのは、これからはお勧めできません。これらの型が`TypeScript`の基本テンプレートから除かれるからです。

```typescript
const App: React.FunctionComponent<{ message: string }> = ({ message }) => (
    <div>{message}</div>
);

```

> Reactの関数コンポーネントであることをはっきりと示したいなら、`React.VoidFunctionComponent(React.VFC)`を使うのがよいでしょう。
ただし、プロパティに`children`を受け取るときは、型定義に含めなければなりません。その場合の型は`React.ReactNode`です。

```typescript
const App: React.VoidFunctionComponent<{ message: string, children: React.ReactNode }> = ({ message }) => (
    <div>
        {message}
        {children}
    </div>
);

```

> React 18では`React.FunctionComponent`が、
デフォルトでは`children`を暗黙で受け取らないように改められるそうです。そのため、将来的には`VoidFunctionComponent`は推奨されなくなります。

# 参考
[https://qiita.com/FumioNonaka/items/4361d1cdf34ffb5a5338](https://qiita.com/FumioNonaka/items/4361d1cdf34ffb5a5338)
