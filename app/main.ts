import 'rxjs/Rx'
import 'rxjs/add/operator/map'
import {provide} from 'angular2/core'
import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router'
import {HTTP_BINDINGS} from 'angular2/http'
import {Http, HTTP_PROVIDERS} from 'angular2/http'
import {AppComponent} from './app.component'

bootstrap(AppComponent, [
	ROUTER_PROVIDERS, 
	HTTP_BINDINGS, 
	HTTP_PROVIDERS, 
	provide(LocationStrategy, { useClass: HashLocationStrategy })
]);