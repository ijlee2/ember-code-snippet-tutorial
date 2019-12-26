import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Helper | get-prism-language', function(hooks) {
    setupRenderingTest(hooks);

    test('converts language outputted by Ember Code Snippet', async function(assert) {
        await render(hbs`{{get-prism-language "handlebars"}}`);

        assert.dom(this.element).hasText('handlebars');


        await render(hbs`{{get-prism-language "javascript"}}`);

        assert.dom(this.element).hasText('javascript');


        await render(hbs`{{get-prism-language "shell"}}`);

        assert.dom(this.element).hasText('bash');


        await render(hbs`{{get-prism-language "text"}}`);

        assert.dom(this.element).hasText('markup');
    });
});