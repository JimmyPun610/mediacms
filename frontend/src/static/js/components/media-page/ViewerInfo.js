import React, { useState } from 'react';
import { MediaPageStore } from '../../utils/stores/';
import ViewerInfoContent from './ViewerInfoContent';
import ViewerInfoTitleBanner from './ViewerInfoTitleBanner';
import { getRequest } from '../../utils/helpers/';

export default class ViewerInfo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      videoLoaded: false,
    };

    this.onVideoLoad = this.onVideoLoad.bind(this);

    MediaPageStore.on('loaded_media_data', this.onVideoLoad);


  }

  onVideoLoad() {
    this.setState({
      videoLoaded: true,
    });
  }


  render() {
    let views, categories, title, author, published, description, channel, isSubscribed;
    let allowDownload = false;
    let loading = !(this.state.videoLoaded && this.state.channel && this.state.isSubscribed != null);
    if (!loading) {
      allowDownload = MediaPageStore.get('media-data').allow_download;

      if (void 0 === allowDownload) {
        allowDownload = true;
      } else {
        allowDownload = !!allowDownload;
      }

      views = MediaPageStore.get('media-data').views;
      categories = MediaPageStore.get('media-data').categories_info;
      title = MediaPageStore.get('media-data').title;

      author = {
        name: MediaPageStore.get('media-data').author_name,
        url: MediaPageStore.get('media-data').author_profile,
        thumb: MediaPageStore.get('media-author-thumbnail-url'),
      };

      published = MediaPageStore.get('media-data').add_date;
      description = MediaPageStore.get('media-data').description;
      channel = this.state.channel;
      isSubscribed = this.state.isSubscribed;
    }

    return loading ? null : (
      <div className="viewer-info">
        <div className="viewer-info-inner">
          <ViewerInfoTitleBanner title={title} views={views} categories={categories} allowDownload={allowDownload} />
          <ViewerInfoContent author={author} published={published} description={description} />
        </div>
      </div>
    );
  }
}
