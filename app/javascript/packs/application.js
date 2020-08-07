import ReactOnRails from 'react-on-rails';

import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';
import App from '../bundles/HelloWorld/components/App';
import SampleComponent from '../bundles/HelloWorld/components/SampleComponent';
import FirstComponent from '../bundles/User/components/FirstComponent';
import IndexComponent from '../bundles/User/components/IndexComponent';


// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  App,
  SampleComponent,
  FirstComponent,
  IndexComponent,
});
