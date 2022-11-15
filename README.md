***laravel vue router setup procedure template****


1.
npm i vue@next

2.
npm i @vitejs/plugin-vue
npm install vue-router@4

3.
Add 
import vue from '@vitejs/plugin-vue'
in vite.cinfig.js

**
注意点としては　laravel sail では現在のところできないのかもしれないということ。理由としてはyoutube 英語でいろいろな動画をさぐってみたがすべての動画がlaravel sail ではなくviteをつかってvueをいれるときにcomposerを利用していたということ。　また自身でまったく同じコードをかいてsailをやってみたがエラーがでて進めなかった



app.phpにこれを記載する

<?php

use Illuminate\Support\Facades\Route;

Route::get('{any}', function () {
    return view('welcome');
})->where('any', '.*');
