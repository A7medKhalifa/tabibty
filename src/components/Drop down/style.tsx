import { Platform, StyleSheet } from 'react-native';
import { Colors } from 'theme/colors';
import Fonts from 'theme/fonsFamily';

export const styles = StyleSheet.create({
  Container: {
      width: '100%',
      height: 49,
      alignSelf: 'center',
      borderColor: Colors().border,
      borderRadius: 5,
      borderWidth: 1,
      backgroundColor: Colors().white,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 14,
      marginBottom: 20
  },
  TitleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
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
  InsetShadowStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      paddingHorizontal: 10,
  },
  Title: {
      fontFamily: Fonts.Messiri,
      fontSize: 14,
      fontWeight: '500',
      marginBottom: 10,
      marginTop: 15,
      color: Colors().black
  },
  Modal: {
      justifyContent: 'flex-end',
      paddingBottom: 10
  },
  Body: {
      height: '35%',
      width: '100%',
      backgroundColor: Colors().white,
      borderRadius: 15,
      padding: 20,
      paddingTop: 10
  },
  Separator: {
      height: .4,
      width: '100%',
      backgroundColor: Colors().border,
      alignSelf: 'center'
  },
  DataContainer: {
      flexDirection: 'row',
      height: 50,
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  Circle: {
      height: 17,
      width: 17,
      borderRadius: 20,
      borderColor: Colors().primary,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  SmallCircle: {
      height: 12,
      width: 12,
      borderRadius: 12,
      backgroundColor: Colors().primary,
  },
  errorText: {
      color: Colors().Red,
      marginTop: Platform.OS === 'android' ? 0 : 5,
      marginLeft: 20,
      fontSize: 12
  }

})
