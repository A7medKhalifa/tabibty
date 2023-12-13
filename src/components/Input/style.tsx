import { Platform, StyleSheet } from 'react-native';
import { Colors } from 'theme/colors';
import Fonts from 'theme/fonsFamily';

export const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    borderColor: Colors().border,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: Colors().white,
    paddingHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  InsetShadowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
  TitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  InputStyle: {
    color: Colors().black,
    fontFamily: Fonts.Messiri,
    textTransform: 'uppercase',
    textAlign: 'right',
  },
  error: {
    fontSize: 12,
    fontWeight: "500",
    color: Colors().Red,
    fontFamily: Fonts.Messiri,
    textAlign: 'center',
    marginTop: -10,
    marginBottom: 20
  },
});
