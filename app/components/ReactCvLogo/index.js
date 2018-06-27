/**
*
* ReactCvLogo
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class ReactCvLogo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <svg width={this.props.logoWidth} height={this.props.logoHeight} viewBox="0 0 196 196" fill="none">
          <g filter="url(#filter0_d)">
            <mask id="a" fill="#fff">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 10C0 4.477 4.477 0 10 0h68v40c0 5.523 4.477 10 10 10h40v116c0 5.523-4.477 10-10 10H10c-5.523 0-10-4.477-10-10V10z"
              />
            </mask>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M34 20c0-5.523 4.477-10 10-10h68v40c0 5.523 4.477 10 10 10h40v116c0 5.523-4.477 10-10 10H44c-5.523 0-10-4.477-10-10V20z"
              fill="#5491F2"
            />
            <path
              d="M78 0h1v-1h-1v1zm50 50h1v-1h-1v1zM10-1C3.925-1-1 3.925-1 10h2a9 9 0 0 1 9-9v-2zm68 0H10v2h68v-2zm1 41V0h-2v40h2zm9 9a9 9 0 0 1-9-9h-2c0 6.075 4.925 11 11 11v-2zm40 0H88v2h40v-2zm1 117V50h-2v116h2zm-11 11c6.075 0 11-4.925 11-11h-2a9 9 0 0 1-9 9v2zm-108 0h108v-2H10v2zm-11-11c0 6.075 4.925 11 11 11v-2a9 9 0 0 1-9-9h-2zm0-156v156h2V10h-2z"
              transform="translate(34 10)"
              fill="#5491F2"
              mask="url(#a)"
            />
          </g>
            <path
              opacity={0.1}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M120 60h42v35l-42-35z"
              fill="#000"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M112 10l27 27 23 23h-40c-5.523 0-10-4.477-10-10V10z"
              fill="#A6C6F7"
            />
            <path
              d="M145.393 167.569H55.607M145.393 157.275H55.607M145.393 146.98H55.607M145.393 136.687H87.76"
              stroke="#fff"
              strokeWidth={3}
              strokeLinecap="square"
            />
            {/* begin the react sympbol sets */}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M80.636 50.12c6.762 3.903 12.486 8.496 16.285 12.853 4.577 5.25 6.374 10.24 4.824 12.925-1.615 2.797-7.152 3.8-14.446 2.283-5.514-1.147-12.073-3.868-18.491-7.574-6.582-3.8-12.38-8.146-16.145-12.446-4.764-5.439-6.492-10.69-4.908-13.434 1.538-2.663 6.587-3.67 13.34-2.374 5.706 1.096 12.713 3.825 19.541 7.767z"
              fill="#5491F2"
              stroke="#fff"
              strokeWidth={3}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M68.762 50.1c6.744-3.881 13.574-6.518 19.242-7.61 6.83-1.315 12.054-.358 13.615 2.33 1.627 2.803-.249 8.094-5.187 13.637-3.733 4.19-9.35 8.49-15.753 12.174-6.565 3.778-13.217 6.604-18.817 7.697-7.085 1.382-12.504.233-14.1-2.515-1.548-2.669.083-7.538 4.558-12.725 3.784-4.387 9.63-9.07 16.442-12.987z"
              fill="#5491F2"
              stroke="#fff"
              strokeWidth={3}
            />
            <path
              opacity={0.9}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M62.853 60.355c-.024-7.782 1.074-15.01 2.937-20.46 2.245-6.565 5.668-10.601 8.777-10.598 3.242.003 6.904 4.285 9.268 11.339 1.787 5.334 2.733 12.35 2.755 19.737.023 7.575-.82 14.746-2.651 20.134-2.316 6.821-6 10.927-9.179 10.924-3.085-.003-6.505-3.86-8.788-10.338-1.928-5.472-3.095-12.88-3.12-20.738z"
              fill="#5491F2"
              stroke="#fff"
              strokeWidth={3}
            />
            <path
              d="M121.797 117.879c-.317 2.707-1.319 4.799-3.006 6.275-1.676 1.465-3.908 2.198-6.697 2.198-3.024 0-5.45-1.084-7.278-3.252-1.816-2.168-2.724-5.069-2.724-8.702v-2.46c0-2.38.422-4.471 1.265-6.276.856-1.805 2.063-3.187 3.622-4.148 1.558-.973 3.363-1.46 5.414-1.46 2.718 0 4.898.762 6.539 2.286 1.64 1.512 2.595 3.61 2.865 6.293h-3.393c-.293-2.04-.931-3.516-1.916-4.43-.972-.914-2.338-1.371-4.095-1.371-2.157 0-3.85.797-5.08 2.39-1.22 1.594-1.829 3.862-1.829 6.803v2.479c0 2.777.58 4.986 1.74 6.627 1.16 1.64 2.784 2.46 4.87 2.46 1.875 0 3.31-.421 4.306-1.265 1.008-.855 1.676-2.338 2.004-4.447h3.393zm13.096 3.639l7.312-21.112h3.691L136.405 126h-2.988l-9.475-25.594h3.674l7.278 21.112z"
              fill="#fff"
            />
            <path
              d="M71.855 65.329c2.782 1.606 6.333.663 7.932-2.106 1.599-2.77.64-6.317-2.142-7.923-2.782-1.606-6.333-.663-7.932 2.106-1.599 2.77-.64 6.317 2.142 7.923z"
              stroke="#fff"
              fill="#fff"
            />
            {/* end the react sympbol sets */}
          <defs>
            <filter
              id="filter0_d"
              x={33}
              y={9}
              width={132}
              height={180}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"
              />
              <feOffset dx={1} dy={1} />
              <feGaussianBlur stdDeviation={1} />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    );
  }
}

ReactCvLogo.propTypes = {
  logoWidth: PropTypes.number,
  logoHeight: PropTypes.number,
};

export default ReactCvLogo;
