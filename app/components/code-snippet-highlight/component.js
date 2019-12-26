import { action } from '@ember/object';
import Component from '@glimmer/component';

import hljs from 'highlight.js/lib/highlight';
import bash from 'highlight.js/lib/languages/bash';
import handlebars from 'highlight.js/lib/languages/handlebars';
import javascript from 'highlight.js/lib/languages/javascript';
import plaintext from 'highlight.js/lib/languages/plaintext';

// Languages supported by Ember Code Snippet
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('handlebars', handlebars);
hljs.registerLanguage('hbs', handlebars);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('plaintext', plaintext);

export default class CodeSnippetHighlightComponent extends Component {
    @action highlightCode(element) {
        hljs.highlightBlock(element);
    }
}