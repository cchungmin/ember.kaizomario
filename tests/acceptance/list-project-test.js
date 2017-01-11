import { test } from 'qunit';
import moduleForAcceptance from 'ember-quickstart/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list project');

test('visiting /list-project', function(assert) {
  visit('/list-project');

  andThen(function() {
    assert.equal(currentURL(), '/list-project');
  });
});
