import { StyleSheet } from 'react-native';
import { Colors } from 'theme/colors';
import Fonts from 'theme/fonsFamily';

export const styles = StyleSheet.create({
  Title: {
    fontFamily: Fonts.Messiri,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 15,
    marginTop: 15,
    color: Colors().black
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 9
  },
  circle: {
    borderWidth: 1,
    borderColor: Colors().primary,
    height: 16,
    width: 16,
    borderRadius: 16,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  activeCircle: {
    width: 10,
    height: 10,
    borderRadius: 17,
    backgroundColor:Colors().primary,
  },
  Text: {
    fontSize: 14,
    fontFamily: Fonts.Messiri,
    fontWeight: '400',
    color: Colors().black
  }
})