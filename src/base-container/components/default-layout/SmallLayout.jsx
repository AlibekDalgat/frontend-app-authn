import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';
import classNames from 'classnames';

import messages from './messages';

const SmallLayout = () => {
  const { formatMessage } = useIntl();

  return (
    <span className="custom-light-background w-100">
      <div>
        <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL}>
        </Hyperlink>
        <div className="d-flex align-items-center m-3.5">
          <div className={classNames({ 'small-yellow-line mr-n2.5': getConfig().SITE_NAME === 'edX' })} />
          <h1
            className={classNames(
              'text-custom mt-3.5 mb-3.5',
            )}
          >
            <span>
              {formatMessage(messages['start.learning'])}{' '}
              <span className="text-custom d-inline-block">
                {formatMessage(messages['with.site.name'], { siteName: getConfig().SITE_NAME })}
              </span>
            </span>
          </h1>
        </div>
      </div>
    </span>
  );
};

export default SmallLayout;
