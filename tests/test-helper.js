import Application from 'reproduction-ember-yeti-table-cell-registration-issue/app';
import config from 'reproduction-ember-yeti-table-cell-registration-issue/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
