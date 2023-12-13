import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import styles from '../styles'
import { EmptyStar, Star } from 'assets/svgs';

const List = ({data}:any) => {
    const [maxRating, setMaxRating] = React.useState([1, 2, 3, 4, 5]);
    return (
        <FlatList
            data={data}
            ItemSeparatorComponent={() => <View style={styles.Separator} />}
            renderItem={() => (
                <View style={styles.ImageContainer}>
                    <View style={styles.TextContainer}>
                        <View style={{ flexDirection: 'row' }}>
                            {maxRating?.map((item: any, key: any) => (item <= 2 ? <EmptyStar width="18" height="18" style={styles.Star} /> : <Star style={styles.Star} width="18" height="18" />))}
                            <Text style={styles.RaterName}>سارة امين</Text>
                        </View>
                        <Text style={styles.Ratedescription}>دكتورة ممتازة  وارشحها لاي بنت دكتورة ممتازة  وارشحها  لاي بنت دكتورة ممتازة  وارشحها لاي لاي بنت<Text style={styles.Date}>  اليوم</Text></Text>
                    </View>
                    <Image style={styles.Image2} source={{ uri: 'https://aul.edu.ng/static/images/reviews/mls.jpg' }} />
                </View>
            )}
        />
    )
}

export default List