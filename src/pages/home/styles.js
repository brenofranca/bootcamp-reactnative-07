import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  menuButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 80,
  },
  menuButtonText: {
    color: colors.white,
  },
  menuContainer: {
    backgroundColor: colors.secondary,
    height: 50,
  },
  menuContent: {
    alignItems: 'center',
  },
});

export default styles;
