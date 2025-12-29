import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';
import classNames from 'classnames';

import messages from './messages';

const MediumLayout = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <div className="w-100 p-0 mb-3 d-flex">
        <div className="col-md-10 custom-light-background">
          <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL}>
          </Hyperlink>
          <div className="d-flex align-items-center justify-content-center mb-4 ">
            <div className={classNames({ 'mt-1 medium-yellow-line': getConfig().SITE_NAME === 'edX' })} />
            <div>
              <h1
                className={classNames(
                  'display-1 text-custom mt-5 mb-5 mr-2 main-heading',
                  { 'ml-4.5': getConfig().SITE_NAME !== 'edX' },
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
        </div>
        <div className="col-md-2 custom-light-background p-0">
          <svg className="w-100 h-100 medium-screen-svg-primary" preserveAspectRatio="xMaxYMin meet">
            <g transform="skewX(168)">
              <rect x="0" y="0" height="100%" width="100%" />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default MediumLayout;
