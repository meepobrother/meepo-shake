## runner for angular

- 引入css自动加入摇一摇动画

```html
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
```

```html
<div (shake)="doShake()">{{title}}</div>
```

```ts
doShake() {
    this.title = 'shake';
    this.cd.markForCheck();
}
```