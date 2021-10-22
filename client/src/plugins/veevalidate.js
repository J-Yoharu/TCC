import Vue from 'vue';
import {
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
  localize,
  extend
} from 'vee-validate';

import ptBR from 'vee-validate/dist/locale/pt_BR.json';

setInteractionMode('eager');
import { required, email, confirmed, min, max, alpha } from 'vee-validate/dist/rules';


setInteractionMode('eager');

// install rules
extend('required', {
  ...required,
  message: 'Este campo é obrigatório',
});

extend('email', {
  ...email,
  message: 'Este campo precisa ser do tipo e-mail',
});

extend('max', max);

extend('alpha', alpha);

extend('confirmed', {
  ...confirmed,
  message: 'As senhas precisam ser iguais.',
});

extend('min', min);

localize('ptBR', ptBR);

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);