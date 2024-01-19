import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles'
import { Dots, EmptyStar, Star } from 'assets/svgs';
import FastImage from 'react-native-fast-image';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import DeleteModal from './DeleteModal';
import { useAppDispatch } from 'store/store';
import AppSlice from 'store/app';
const List = ({ data, id }: any) => {
    const dispatch = useAppDispatch()
    const [maxRating, setMaxRating] = React.useState([1, 2, 3, 4, 5]);
    const [visable, setVisable] = React.useState(false);


    return (
        <FlatList
            data={data}
            ItemSeparatorComponent={() => <View style={styles.Separator} />}
            renderItem={({ item }) => (
                <View style={styles.ImageContainer}>
                    <DeleteModal bigId={id} id={item?._id} visable={visable} setVisable={setVisable} />
                    <View style={styles.TextContainer}>
                        <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between' }}>
                            {item?.isCurrentUserReview ? <Menu>
                                <MenuTrigger>
                                    <Dots />
                                </MenuTrigger>
                                <MenuOptions optionsContainerStyle={{ width: 100 }} >
                                    <MenuOption onSelect={() => {
                                        dispatch(AppSlice.changeEdit(item?._id))
                                        dispatch(AppSlice.changeComment(item?.comment))
                                    }} >
                                        <Text style={{ color: 'black', textAlign: 'center' }}>تعديل</Text>
                                    </MenuOption>
                                    <MenuOption onSelect={() => { setVisable(true) }} >
                                        <Text style={{ color: 'red', textAlign: 'center' }}>حذف</Text>
                                    </MenuOption>
                                </MenuOptions>
                            </Menu>
                                :
                                <View />
                            }

                            <Text numberOfLines={1} style={styles.RaterName}> {item?.isCurrentUserReview && `(أنت)`} {item?.user?.fullname?.split(' ').slice(0, 2)}</Text>
                        </View>
                        <Text style={styles.Ratedescription}>{item?.comment}</Text>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            {maxRating.map((star) => (star <= (5 - parseInt(item?.rating)) ? <EmptyStar width="18" height="18" style={styles.Star} /> : <Star style={styles.Star} width="18" height="18" />))}
                        </View>
                    </View>
                    <FastImage style={styles.Image2} source={{ uri: 'https://aul.edu.ng/static/images/reviews/mls.jpg' }} />
                </View>
            )}
        />
    )
}

export default List