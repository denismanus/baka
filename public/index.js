
import Vue from 'vue';
import Vuex from 'vuex';

// load vuex i18n module
import vuexI18n from 'vuex-i18n';

const store = new Vuex.Store();

Vue.use(vuexI18n.plugin, store);

const translationsEn = {
	"content": "SignIn"
};

const translationsRu = {
	//"My nice title": "Ein schöner Titel",
	"content": "Войти"
};

// add translations directly to the application
Vue.i18n.add('en', translationsEn);
Vue.i18n.add('ru', translationsRu);

// set the start locale to use
Vue.i18n.set('ru');

// create a new component (requires a div with id app as mount point)
// you can use the method $t to access translations. the value will be returned
// as is, if no corresponding key is found in the translations
var app = new Vue({
	store,
	el: '#app',
	template: `
		<div>
			<h1>{{ 'My nice title' | translate }}</h1>
			<p>{{ $t('content', {'type': 'nice'}) }}</p>
		</div>
	`
});
