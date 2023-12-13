import { FlatList } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles';
import ArticleCard from '../Article Card';
import { SkeletonPlaceholder } from 'rn-skeleton-placeholder';
import AppThunks from 'src/redux/app/thunks';
import { useAppDispatch } from 'src/redux/store';

const ArticleCardsList = ({
    data,
    isLoading
}: {
    data?: any;
    isLoading?: boolean;
}) => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(AppThunks.doGetSaves())
    }, [])
    return (
        isLoading ?
            <FlatList
                data={[{}]}
                renderItem={() => (
                    <SkeletonPlaceholder
                        itemWidth={'100%'}
                        itemHeight={135}
                        itemStyle={styles.Skeleton}
                    />
                )}
            />
            :
            <FlatList
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                data={data}
                style={styles.FlatList}
                renderItem={({ item }) => {
                    return (
                        <ArticleCard item={item} />
                    )
                }}
            />
    )
}

export default ArticleCardsList