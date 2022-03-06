import jsdom from 'jsdom';

const { JSDOM } = jsdom;

const dom = new JSDOM('<html><body></body></html>');

const document = dom.window.document;

const createElement = tag => attributes => {
   attributes.forEach(attribute => tag.setAttribute(Object.keys(attribute)[0], Object.values(attribute)[0]));
   return tag;
};

const tag = tagName => document.createElement(tagName);

const div = createElement(tag('div'))([{class: 'something'}]);

console.log(div);
