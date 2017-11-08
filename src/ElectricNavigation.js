'use strict';

import MetalToggler from 'metal-toggler';
import Soy from 'metal-soy';
import {ElectricNavigation} from 'electric-base-components';

import templates from './ElectricNavigation.soy';

Soy.register(ElectricNavigation, templates);

export default class ElectricNavigation extends ElectricNavigation {
  attached() {
    // new MetalToggler({
    //   content: listClasses,
    //   header: toggleClasses
    // });
  }
}
