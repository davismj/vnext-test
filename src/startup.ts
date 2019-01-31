import { DI } from '@aurelia/kernel';
import { DebugConfiguration } from '@aurelia/debug';
import { BasicConfiguration } from '@aurelia/jit';
import { Aurelia, CustomElementResource } from '@aurelia/runtime';
import { App } from './app';
import { HomePage } from './pages/home';

const container = DI.createContainer();
container.register(DebugConfiguration, BasicConfiguration, <any>App, <any>HomePage);
const component = container.get(CustomElementResource.keyFrom('app'));

const au = new Aurelia(container)
  .app({ host: document.querySelector('app'), component })
  .start();
