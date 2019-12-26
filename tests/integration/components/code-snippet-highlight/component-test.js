import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | code-snippet-highlight', function(hooks) {
    setupRenderingTest(hooks);


    test('should render a Handlebars file', async function(assert) {
        await render(hbs`
            <CodeSnippetHighlight
                @fileName="ddau/octane-parent.hbs"
            />
        `);

        assert.dom('[data-test-code-snippet]')
            .hasText('{{!-- parent-component.hbs --}} <ChildComponent @plusOne={{this.plusOne}} /> Count: {{this.count}}');
    });


    test('should render a JavaScript file', async function(assert) {
        await render(hbs`
            <CodeSnippetHighlight
                @fileName="ddau/classic-parent.js"
            />
        `);

        assert.dom('[data-test-code-snippet]')
            .hasText('// parent-component.js import Component from \'@ember/component\'; export default Component.extend({ count: 0 });');
    });


    test('should render a shell file', async function(assert) {
        await render(hbs`
            <CodeSnippetHighlight
                @fileName="generating-component/classic.shell"
            />
        `);

        assert.dom('[data-test-code-snippet]')
            .hasText('ember generate component');
    });
});