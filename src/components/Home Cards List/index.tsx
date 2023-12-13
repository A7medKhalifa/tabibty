import { FlatList, View } from 'react-native'
import React from 'react'
import HomeCard from '../Home Card'
import styles from './styles';
import { SkeletonPlaceholder } from 'rn-skeleton-placeholder';

const HomeCardsList = ({
    data,
    lab,
    isLoading
}: {
    data?: any;
    lab?: boolean;
    isLoading?: boolean
}) => {
    return (
        isLoading ?
            <FlatList
                data={[{}, {}, {}]}
                numColumns={3}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={() => (
                    <SkeletonPlaceholder
                        itemWidth={110}
                        itemHeight={170}
                        itemStyle={styles.Skeleton}
                    />
                )}
            />
            :
            <View style={styles.Container}>
                {data?.map((item: any) => {
                    if (!item?.empty) {
                        return <HomeCard style={styles.HomeCard} lab={lab} item={item} />
                    } else {
                        return <View style={styles.invisible} />;
                    }
                })}
            </View>
    )
}

export default HomeCardsList