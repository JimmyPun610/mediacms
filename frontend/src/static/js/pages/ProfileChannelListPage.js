import React from 'react';
import { ApiUrlConsumer } from '../utils/contexts';
import { PageStore } from '../utils/stores';
import { MediaListWrapper } from '../components/MediaListWrapper';
import ProfilePagesHeader from '../components/profile-page/ProfilePagesHeader';
import ProfilePagesContent from '../components/profile-page/ProfilePagesContent';
import { LazyLoadItemListAsync } from '../components/item-list/LazyLoadItemListAsync.jsx';
import { ProfileMediaPage } from './ProfileMediaPage';

export class ProfileChannelListPage extends ProfileMediaPage {
    constructor(props) {
        super(props, 'author-channels');

        this.state = {
            loadedAuthor: false,
            loadedChannels: false,
            channelsCount: -1,
        };

        this.getChannelsCountFunc = this.getChannelsCountFunc.bind(this);
    }

    getChannelsCountFunc(resultsCount) {
        this.setState({
            loadedChannels: true,
            channelsCount: resultsCount,
        });
    }

    pageContent() {
        return [
            this.state.author ? (
                <ProfilePagesHeader key="ProfilePagesHeader" author={this.state.author} type="channels" />
            ) : null,
            this.state.author ? (
                <ProfilePagesContent key="ProfilePagesContent">
                    <MediaListWrapper
                        title={-1 < this.state.channelsCount ? 'Channels' : void 0}
                        className="profile-channels-content items-list-ver">
                        <LazyLoadItemListAsync
                            requestUrl={'api/v1/channels?page=1'}
                            itemsCountCallback={this.getChannelsCountFunc}
                        />
                    </MediaListWrapper>

                </ProfilePagesContent>
            ) : null,
        ];
    }
}
