# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Screenshot

![](./design/desktop-preview.jpg)

### What I learned

- using prefers-color-shceme with media queries

```css
@media (prefers-color-scheme: light) {
  :root {
    --clr-toggle: hsl(230, 22%, 74%);
    --clr-background: hsl(0, 0%, 100%);
    --clr-background-top: hsl(225, 100%, 98%);
    --clr-card: hsl(227, 47%, 96%);
    --clr-card-hover: #e0e4f0;
    --clr-text2: hsl(228, 12%, 44%);
    --clr-text1: hsl(230, 17%, 14%);
  }
}
```

- using localStorage to set/get data

```js
let storedLightMode = localStorage.getItem("lightMode");
localStorage.setItem("lightMode", "enabled");
```
