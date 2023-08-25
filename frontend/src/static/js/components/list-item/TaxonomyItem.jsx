import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useItem } from '../../utils/hooks/';
import { PositiveIntegerOrZero, csrfToken, deleteRequest, getRequest } from '../../utils/helpers/';
import { TaxonomyItemMediaCount, itemClassname } from './includes/items/';
import { Item } from './Item';
import { PageActions } from '../../utils/actions';
import { MemberConsumer, MemberContext } from '../../utils/contexts';

export function TaxonomyItem(props) {
  const type = props.type;
  const { titleComponent, descriptionComponent, thumbnailUrl, UnderThumbWrapper } = useItem({ ...props, type });


  const [showDeleteBtn, setShowDeleteBtn] = useState(false);

  function thumbnailComponent() {
    const attr = {
      key: 'item-thumb',
      href: props.link,
      title: props.title,
      tabIndex: '-1',
      'aria-hidden': true,
      className: 'item-thumb' + (!thumbnailUrl ? ' no-thumb' : ''),
      style: !thumbnailUrl ? null : { backgroundImage: "url('" + thumbnailUrl + "')" },
    };
    return <a {...attr}></a>;
  }

  function metaComponents() {
    return props.hideAllMeta ? null : (
      <span className="item-meta">{<TaxonomyItemMediaCount count={props.media_count} />}</span>
    );
  }

  const containerClassname = itemClassname('item ' + type + '-item', props.class_name.trim(), false);
  if (type == 'category' && MemberContext._currentValue.username) {
    getRequest(
      `api/v1/categories/${props.title}/allow-remove`,
      {},
      (response) => {
        setShowDeleteBtn(response.data);
      },
      {}
    )
  }

  function deleteCategory() {
    if (confirm(`Are you use to remove category [${props.title}]?`) == true) {
      deleteRequest(
        `api/v1/categories/${props.title}/delete`,
        { headers: { 'X-CSRFToken': csrfToken() } },
        {},
        (response) => {
          if (response.status == 200) {
            PageActions.addNotification(`Delete category ${props.title} success.`, 'deleteCategory');
            setTimeout(() => {
              window.location.reload();
            }, 1000)
          }
        },
        {}
      )
    }
  }

  return (
    <div className={containerClassname}>
      <div className="item-content">
        {thumbnailComponent()}

        <UnderThumbWrapper title={props.title} link={props.link}>
          {titleComponent()}
          {metaComponents()}
          {descriptionComponent()}
        </UnderThumbWrapper>

        {!showDeleteBtn ? null :
          (
            <button type='button' className='delete-category-btn' onClick={deleteCategory}>Delete</button>
          )
        }
      </div>
    </div>
  );
}

TaxonomyItem.propTypes = {
  ...Item.propTypes,
  type: PropTypes.string.isRequired,
  class_name: PropTypes.string,
  media_count: PositiveIntegerOrZero,
};

TaxonomyItem.defaultProps = {
  ...Item.defaultProps,
  class_name: '',
  media_count: 0,
};
