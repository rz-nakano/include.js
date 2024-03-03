/*
 * Copyright (c) 2024 rz-nakano
 * This software is released under the MIT License, see LICENSE.
 */
const template = document.getElementById("include-template");
if (template && template.href) {
  fetch(template.href, {method: 'GET'})
    .then((response) => response.ok ? response.text() : '')
    .then((response) => {
      const doc = new DOMParser().parseFromString(response, 'text/html');
      doc.querySelectorAll('[id^="include-"]').forEach((from) => {
        const to = document.getElementById(from.id);
        if (to && to.tagName == from.tagName) {
          to.replaceChildren(...from.children);
        }
      });
    });
}
