import { helper } from '@ember/component/helper';

const mapLangugage = {
    shell: 'handlebars',
    text: 'plaintext'
};

// Convert the Ember Code Snippet language if needed
export default helper(function getHighlightLanguage(params) {
    const emberCodeSnippetLanguage = params[0];

    if (Object.prototype.hasOwnProperty.call(mapLangugage, emberCodeSnippetLanguage)) {
        return mapLangugage[emberCodeSnippetLanguage];
    }

    return emberCodeSnippetLanguage;
});