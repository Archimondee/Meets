import React, {PureComponent} from 'react';
import {Text} from 'react-native';
import styles from './TabStyles';

interface Props {
  focused: boolean;
}

export class TitleHome extends PureComponent<Props> {
  render() {
    const {focused} = this.props;
    return <Text style={styles(focused).title}>Home</Text>;
  }
}

export class TitleFavorite extends PureComponent<Props> {
  render() {
    const {focused} = this.props;
    return <Text style={styles(focused).title}>Favorites</Text>;
  }
}
