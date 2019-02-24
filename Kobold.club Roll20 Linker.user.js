// ==UserScript==
// @name         Kobold.club Roll20 Linker
// @namespace    none
// @version      0.1
// @description  Turn Kobold Club names to links to roll20.
// @author       RankWeis
// @match        https://*kobold.club/*
// @match        http://*kobold.club/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        none
// ==/UserScript==
const roll20 = "https://roll20.net/compendium/dnd5e/";

function replaceCurrent() {
    Array.from(document.getElementsByClassName("current-encounter--monster-name"))
        .map(it => {
                var elem = it.textContent;
                var url = encodeURI(roll20 + elem);
                it.innerHTML = `<a href="${url}">${elem}</a>`;
        })
}

function replaceTable() {
    'use strict';
    console.log("TamperMonkey - Replacing kobold.club names with links to roll20");
    Array.from(document.getElementsByClassName("monster-table--name ng-binding"))
        .map(it => {
                var elem = it.textContent;
                var url = encodeURI(roll20 + elem);
                it.innerHTML = `<a href="${url}">${elem}</a>`;
        })
    Array.from(document.getElementsByClassName("btn btn-sm btn-success"))
        .map(it => {
                it.onclick = waitForKeyElements(".current-encounter--monster-name", replaceCurrent);
                });

}


(function() {
    waitForKeyElements(".monster-table--name", replaceTable);
})();
