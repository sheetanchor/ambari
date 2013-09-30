/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var App = require('app');

App.WizardStep13View = App.HighAvailabilityProgressPageView.extend({

  headerTitle: Em.I18n.t('installer.step13.header'),

  noticeInProgress: function () {
    return Em.I18n.t('installer.step13.status.info').format(App.format.role(this.get('controller.content.reassign.component_name')))
  }.property('controller.content.reassign.component_name'),

  noticeFailed: function () {
    return Em.I18n.t('installer.step13.status.failed').format(App.format.role(this.get('controller.content.reassign.component_name')))
  }.property('controller.content.reassign.component_name'),

  noticeCompleted: function () {
    if (this.get('controller.content.hasManualSteps')) {
      return Em.I18n.t('installer.step13.status.success.withManualSteps').format(this.get('controller.content.reassign.component_name'));
    } else {
      return Em.I18n.t('installer.step13.status.success').format(this.get('controller.content.reassign.component_name'));
    }
  }.property('controller.content.reassign.component_name'),

  submitButtonText: function () {
    if (this.get('controller.content.hasManualSteps')) {
      return Em.I18n.t('common.next') + ' &rarr;';
    } else {
      return Em.I18n.t('common.complete');
    }
  }.property('controller.content.hasManualSteps'),

  templateName: require('templates/wizard/step13')
});
