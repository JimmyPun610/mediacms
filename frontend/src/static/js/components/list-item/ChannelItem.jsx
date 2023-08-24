import React from 'react';
import { format } from 'timeago.js';
import { useItem } from '../../utils/hooks/';
import { PositiveIntegerOrZero } from '../../utils/helpers/';
import { PlaylistItemMetaDate } from './includes/items/';
import { Item } from './Item';

export function ChannelItem(props) {
    const type = 'channel';
    const { titleComponent, thumbnailUrl, UnderThumbWrapper } = useItem({ ...props, type });

    return (
        <div className="item playlist-item">
            <div className="item-content">
                <a
                    className={'item-thumb' + (!thumbnailUrl ? ' no-thumb' : '')}
                    href={props.link}
                    title={props.title}
                    tabIndex="-1"
                    aria-hidden="true"
                    style={!thumbnailUrl ? null : { backgroundImage: "url('" + thumbnailUrl + "')" }}
                >
                </a>

                <UnderThumbWrapper title={props.title}>
                    {titleComponent()}
                </UnderThumbWrapper>
            </div>
        </div>
    );
}

ChannelItem.propTypes = {
    ...Item.propTypes,
    media_count: PositiveIntegerOrZero,
};

ChannelItem.defaultProps = {
    ...Item.defaultProps,
    media_count: 0,
};
