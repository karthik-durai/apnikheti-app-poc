import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation'

import { TabNavigation } from './routes/index'

const App = createAppContainer(TabNavigation)

export default class Root extends Component {
  render() {
    return (
      <View>
        <Text>ApniKheti App</Text>
      </View>
    );
  }
}
