// ==UserScript==
// @name         Kobold.club Roll20 Linker
// @namespace    none
// @version      0.1
// @description  Turn Kobold Club names to links to roll20.
// @author       RankWeis
// @match        https://*kobold.club/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        none
// ==/UserScript==



function replace() {
    'use strict';
    const roll20 = "https://roll20.net/compendium/dnd5e/";
    console.log("TamperMonkey - Replacing kobold.club names with links to roll20");
    Array.from(document.getElementsByClassName("monster-table--name ng-binding"))
	.map(it => {
		var elem = it.textContent;
		var url = encodeURI(roll20 + elem);
		it.innerHTML = `<a href="${url}">${elem}</a>`;
	})
}

(function() {
    waitForKeyElements(".monster-table--name", replace);
})();
