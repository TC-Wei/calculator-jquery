# 計算機（jQuery 版）

## Demo

- jQuery 版：https://tc-wei.github.io/calculator-jquery/
- 原生 JS 版：https://tc-wei.github.io/calculator/

## 為什麼有這版

把原生 JS 寫的計算機用 jQuery 重寫，比較兩種寫法的差別。

## 功能

四則運算、小數點、退格、正負號、百分比

## 技術

HTML5、CSS3、jQuery

## 卡住的地方

- .text 和 .text() 差一個括號：前者是函式本身，後者才是結果
- 0.1 + 0.2 不等於 0.3，二進位存不下十進位小數，用 toFixed(6) 在顯示時處理
- 跨點擊要記住的值（firstNumber、operator）必須宣告在函式外

## 學到什麼

jQuery 換掉的是操作畫面的部分，判斷和運算的邏輯還是原生 JS，一行都沒改
