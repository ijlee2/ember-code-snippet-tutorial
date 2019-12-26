import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Helper | get-highlight-language', function(hooks) {
    setupRenderingTest(hooks);

    test('converts language outputted by Ember Code Snippet', async function(assert) {
        await render(hbs`{{get-highlight-language "handlebars"}}`);

        assert.dom(this.element).hasText('handlebars');


        await render(hbs`{{get-highlight-language "javascript"}}`);

        assert.dom(this.element).hasText('javascript');


        await render(hbs`{{get-highlight-language "shell"}}`);

        assert.dom(this.element).hasText('handlebars');


        await render(hbs`{{get-highlight-language "text"}}`);

        assert.dom(this.element).hasText('plaintext');
    });
});